const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const { sys_check_train_enabled } = require('#/system/sys-calc-chara-param');
const filter_chara = require('#/system/sys-filter-chara');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sort_list } = require('#/utils/list-utils');

const print_page_header = require('#/page/components/page-header');
const race_indicator = require('#/page/components/race-indicator');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const {
  adaptability_colors,
  el_danger_color,
  motivation_colors,
} = require('#/data/color-const');
const {
  attr_background_colors,
  growth_colors,
  love_colors,
  relation_colors,
} = require('#/data/const.json');
const {
  growth_stage,
  human_growth_stage,
  human_sex_title,
  sex_title,
} = require('#/data/ero/status-const');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_chara_score,
  get_love_info,
  get_rank_level,
  get_relation_info,
  get_train_time,
} = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { motivation_names, out_of_train_type } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} type
 */
function get_suffix(chara_id, type) {
  const ret = [];
  if (type === chara_info_type.train) {
    const chara_score = get_chara_score(chara_id),
      motivation = era.get(`cflag:${chara_id}:干劲`);
    let chara_level = get_rank_level(chara_score);
    const races = new RaceHistory(chara_id).get_values();
    ret.push(
      {
        config: {
          align: 'center',
          color: adaptability_colors[chara_level],
          width: 1,
          fontWeight: 'bold',
        },
        content: chara_score,
        type: 'text',
      },
      {
        config: {
          align: 'center',
          color: motivation_colors[motivation + 2],
          width: 2,
        },
        content: motivation_names[motivation + 2],
        type: 'text',
      },
      {
        config: { align: 'center', width: 3 },
        content:
          races.length > 0
            ? `${races.length} 战 ${
                races.filter((e) => e.rank === 1).length
              } 胜`
            : '未出走',
        type: 'text',
      },
      {
        config: { align: 'center', width: 2 },
        content: get_train_time(chara_id).substring(0, 3),
        type: 'text',
      },
      {
        config: { align: 'center', width: 1 },
        content: chara_id
          ? `${era.get(`cflag:${chara_id}:育成次数`) + 1}`
          : '-',
        type: 'text',
      },
    );
  } else {
    const relation = get_relation_info(chara_id)[0],
      love = get_love_info(chara_id)[0],
      race = era.get(`cflag:${chara_id}:种族`),
      growth = (race ? growth_stage : human_growth_stage)[
        Math.min(era.get(`cflag:${chara_id}:成长阶段`), 2)
      ],
      sex = era.get(`cflag:${chara_id}:性别`),
      palace = era.get(`cflag:${chara_id}:殿堂`),
      in_train = era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48;
    ret.push(
      {
        config: { align: 'center', width: 2 },
        content: race ? sex_title[sex] : human_sex_title[sex],
        type: 'text',
      },
      {
        config: { align: 'center', color: growth_colors[growth], width: 2 },
        content: growth,
        type: 'text',
      },
      {
        config: { align: 'center', color: relation_colors[relation], width: 2 },
        content: relation,
        type: 'text',
      },
      {
        config: { align: 'center', color: love_colors[love], width: 1 },
        content: love,
        type: 'text',
      },
      {
        config: { align: 'center', width: 2 },
        content:
          chara_id && race
            ? palace
              ? out_of_train_type[palace - 1]
              : in_train
                ? get_train_time(chara_id).substring(0, 3)
                : '待入学'
            : '-',
        type: 'text',
      },
    );
  }
  ret.push(
    {
      config: {
        color: attr_background_colors['体力'],
        height: 22,
        offset: 1,
        width: 3,
        barWidth: 20,
      },
      inContent: `${era.get(`base:${chara_id}:体力`)}/${era.get(
        `maxbase:${chara_id}:体力`,
      )}`,
      percentage:
        (era.get(`base:${chara_id}:体力`) * 100) /
        era.get(`maxbase:${chara_id}:体力`),
      type: 'progress',
    },
    {
      config: {
        color: attr_background_colors['精力'],
        height: 22,
        width: 3,
        barWidth: 20,
      },
      inContent: `${era.get(`base:${chara_id}:精力`)}/${era.get(
        `maxbase:${chara_id}:精力`,
      )}`,
      percentage:
        (era.get(`base:${chara_id}:精力`) * 100) /
        era.get(`maxbase:${chara_id}:精力`),
      type: 'progress',
    },
  );
  ret.push({
    config: { offset: 4, width: 20 },
    content: [...race_indicator(chara_id), ' ', ...get_status(chara_id)],
    type: 'text',
  });
  return ret;
}

async function select_target(type) {
  let list_team = filter_chara('cflag', '招募状态', recruit_flags.yes);

  if (type === chara_info_type.train) {
    list_team = sort_list(
      list_team.filter((chara_id) => sys_check_train_enabled(chara_id)),
      (chara_id) => {
        return (
          (era.get(`cflag:${chara_id}:育成回合计时`) << 15) +
          get_chara_score(chara_id, true)
        );
      },
      false,
    );
  } else if (type !== chara_info_type.info) {
    // 一般不用显示自己
    list_team = sort_list(
      list_team.filter((e) => e && get_custom_mec(e).is_able_to_be_selected),
      (chara_id) => {
        return (
          (era.get(`cflag:${chara_id}:成长阶段`) << 17) +
          (era.get(`love:${chara_id}`) << 10) +
          era.get(`relation:${chara_id}:0`)
        );
      },
    );
  }

  const max_page = Math.ceil(list_team.length / 10);
  let cur_page = 1,
    select_flag = true,
    ret;
  while (select_flag) {
    await era.clear();
    print_page_header();
    const buffer = [];
    buffer.push({
      config: {
        content: `选择${
          type === chara_info_type.info ? '要查看情报的' : '要互动的'
        }角色 (${list_team.length})`,
      },
      type: 'divider',
    });

    if (list_team.length) {
      buffer.push(
        { config: { width: 4 }, content: '姓名', type: 'text' },
        {
          config: { align: 'center', width: 4 },
          content: '称号',
          type: 'text',
        },
      );
      if (type === chara_info_type.train) {
        buffer.push(
          {
            config: { align: 'center', width: 1 },
            content: '评分',
            type: 'text',
          },
          {
            config: { align: 'center', width: 2 },
            content: '干劲',
            type: 'text',
          },
          {
            config: { align: 'center', width: 3 },
            content: '战绩',
            type: 'text',
          },
          {
            config: { align: 'center', width: 2 },
            content: '育成',
            type: 'text',
          },
          {
            config: { align: 'center', width: 1 },
            content: '周目',
            type: 'text',
          },
        );
      } else {
        buffer.push(
          {
            config: { align: 'center', width: 2 },
            content: '性别',
            type: 'text',
          },
          {
            config: { align: 'center', width: 2 },
            content: '年龄',
            type: 'text',
          },
          {
            config: { align: 'center', width: 2 },
            content: '好感',
            type: 'text',
          },
          {
            config: { align: 'center', width: 1 },
            content: '爱慕',
            type: 'text',
          },
          {
            config: { align: 'center', width: 2 },
            content: '育成',
            type: 'text',
          },
        );
      }
      buffer.push(
        {
          config: { align: 'center', offset: 1, width: 3 },
          content: '体力',
          type: 'text',
        },
        {
          config: { align: 'center', width: 3 },
          content: '精力',
          type: 'text',
        },
      );
      const cur_list = list_team.slice((cur_page - 1) * 10, cur_page * 10);
      cur_list.forEach((chara_id) => {
        const chara = get_chara_talk(chara_id),
          titles = new CharaTitles(chara_id),
          title = titles.get_colored_curr_title(true),
          event_counts =
            type === undefined ? new EventMarks(chara_id).count() : 0;
        buffer.push({
          accelerator: chara_id,
          config: {
            buttonType: event_counts > 0 ? 'danger' : 'warning',
            width: 4,
          },
          content:
            chara.actual_name === chara.name
              ? chara.name
              : `${chara.name} (${chara.actual_name})`,
          type: 'button',
        });
        if (title) {
          buffer.push({
            config: { align: 'center', width: 4 },
            content: [title],
            type: 'text',
          });
        } else if (titles.count()) {
          buffer.push({
            config: { align: 'center', width: 4 },
            content: `（${titles.count()}）`,
            type: 'text',
          });
        } else {
          buffer.push({
            config: { align: 'center', width: 4 },
            content: '（无）',
            type: 'text',
          });
        }
        buffer.push(...get_suffix(chara_id, type));
      });
    } else {
      buffer.push({
        content: '队伍中没有其他成员',
        config: { align: 'center' },
        type: 'text',
      });
    }

    if (type === undefined) {
      buffer.push(
        { type: 'divider' },
        {
          content: [
            '* 选择按钮显示为',
            { color: el_danger_color, content: '红色' },
            '的角色本周有特殊事件需要你关注……',
          ],
          type: 'text',
        },
      );
    }

    buffer.push({ type: 'divider' });
    if (max_page > 1) {
      buffer.push(
        {
          accelerator: 996,
          config: { disabled: cur_page === 1, width: 4 },
          content: '上一页',
          type: 'button',
        },
        {
          config: { width: 4 },
          content: `第 ${cur_page} 页 / 共 ${max_page} 页`,
          type: 'text',
        },
        {
          accelerator: 997,
          config: { disabled: cur_page === max_page, width: 8 },
          content: '下一页',
          type: 'button',
        },
      );
    }
    if (type === chara_info_type.info) {
      buffer.push({
        accelerator: 999,
        config: { align: 'right', width: 8 },
        content: '返回上一级',
        type: 'button',
      });
    } else {
      buffer.push(
        {
          accelerator: 998,
          config: { align: 'right', width: 4 },
          content: '清空互动角色',
          type: 'button',
        },
        {
          accelerator: 999,
          config: { align: 'right', width: 4 },
          content: '返回上一级',
          type: 'button',
        },
      );
    }
    era.printMultiColumns(buffer, { horizontalAlign: 'end' });

    ret = await era.input();

    if (ret === 996) {
      cur_page--;
    } else if (ret === 997) {
      cur_page++;
    } else if (ret === 998) {
      ret = 0;
      select_flag = false;
    } else if (ret === 999) {
      ret = undefined;
      select_flag = false;
    } else {
      select_flag = false;
    }
  }
  return ret;
}

module.exports = select_target;
