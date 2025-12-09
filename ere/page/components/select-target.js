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
  attr_bg_colors,
  el_danger_color,
  love_colors,
  motivation_colors,
  relation_colors,
} = require('#/data/color-const');
const {
  get_growth,
  human_sex_title,
  pregnant_stage_enum,
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
const { get_growth_color } = require('#/data/other-const');
const RaceHistory = require('#/data/race/model/race-history');
const { motivation_names, out_of_train_type } = require('#/data/train-const');
const { i18n } = require('#/i18n/selector');

const arrows = { '-1': '▼', 0: '', 1: '▲' };

/**
 * @param {number} cid
 * @param {number} race
 * @param {number} palace
 * @param {boolean} in_train
 * @returns {string}
 */
function get_edu_stage(cid, race, palace, in_train) {
  if (!cid || !race) {
    return '-';
  }
  if (palace >= 1) {
    return out_of_train_type[palace - 1];
  }
  if (in_train) {
    return get_train_time(cid).substring(0, 3);
  }
  if (era.get(`cflag:${cid}:可再次育成`) > 0) {
    return '-';
  }
  return '待入学';
}

/**
 * @param {number} cid
 * @param {number} type
 */
function get_suffix(cid, type) {
  const ret = [];
  if (type === chara_info_type.train) {
    const score = get_chara_score(cid);
    const motivation = era.get(`cflag:${cid}:干劲`);
    const rank = get_rank_level(score);
    const races = RaceHistory.get(cid).get_values();
    const wins = races.filter((e) => e.rank === 1).length;
    ret.push(
      {
        config: {
          align: 'center',
          color: adaptability_colors[rank],
          width: 2,
          fontWeight: 'bold',
        },
        content: score,
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
        config: { align: 'center', width: 2 },
        content:
          races.length > 0
            ? [
                {
                  content: `${wins}/${races.length}`,
                  title: `${races.length} 战 ${wins} 胜`,
                },
              ]
            : '未出走',
        type: 'text',
      },
      {
        config: { align: 'center', width: 2 },
        content: get_train_time(cid).substring(0, 3),
        type: 'text',
      },
      {
        config: { align: 'center', width: 2 },
        content: cid ? `${era.get(`cflag:${cid}:育成次数`) + 1}` : '-',
        type: 'text',
      },
    );
  } else {
    const relation = get_relation_info(cid);
    const love = get_love_info(cid);
    const race = era.get(`cflag:${cid}:种族`);
    const g_level = era.get(`cflag:${cid}:成长阶段`);
    const growth = get_growth(g_level, race);
    const sex = era.get(`cflag:${cid}:性别`);
    const palace = era.get(`cflag:${cid}:殿堂`);
    const in_train = era.get(`cflag:${cid}:育成回合计时`) < 3 * 48;
    ret.push(
      {
        config: { align: 'center', width: 2 },
        content: race ? sex_title[sex] : human_sex_title[sex],
        type: 'text',
      },
      {
        config: { align: 'center', color: get_growth_color(g_level), width: 2 },
        content: growth,
        type: 'text',
      },
      {
        config: {
          align: 'center',
          color: relation_colors[relation.level],
          width: 2,
        },
        content: relation.mark(),
        type: 'text',
      },
      {
        config: { align: 'center', color: love_colors[love.level], width: 2 },
        content: love.mark(),
        type: 'text',
      },
      {
        config: { align: 'center', width: 2 },
        content: get_edu_stage(cid, race, palace, in_train),
        type: 'text',
      },
    );
  }
  ret.push(
    ...['hp', 'tp'].map((a, i) => {
      const val = era.get(`base:${cid}:${i}`);
      const limit = era.get(`maxbase:${cid}:${i}`);
      return {
        config: {
          color: attr_bg_colors[a],
          height: 22,
          width: 3,
          barWidth: 20,
        },
        inContent: `${Math.floor(val)}/${Math.floor(limit)}`,
        percentage: (val * 100) / limit,
        type: 'progress',
      };
    }),
    {
      config: { offset: 4, width: 20 },
      content: [...race_indicator(cid), ' ', ...get_status(cid)],
      type: 'text',
    },
  );
  return ret;
}

/**
 * @param {number[]} team
 * @returns {number[]}
 */
function sort_team_by_id(team) {
  return sort_list(team, (e) => e, true);
}

/**
 * @param {number[]} team
 * @returns {number[]}
 */
function sort_team_by_train(team) {
  return sort_list(
    team,
    (chara_id) => {
      return (
        (era.get(`cflag:${chara_id}:育成回合计时`) << 15) +
        get_chara_score(chara_id, true)
      );
    },
    false,
  );
}

/**
 * @param {number[]} team
 * @returns {number[]}
 */
function sort_team_by_all(team) {
  return sort_list(team, (chara_id) => {
    return (
      (Math.min(era.get(`cflag:${chara_id}:成长阶段`), 4) << 17) +
      (era.get(`love:${chara_id}`) << 10) +
      era.get(`relation:${chara_id}:0`)
    );
  });
}

const page_size = 10;

async function select_target(
  type = chara_info_type.school,
  page = { curr: 1 },
) {
  let sort_func = sort_team_by_id;
  let team_list = filter_chara('cflag', '招募状态', recruit_flags.yes);

  if (type === chara_info_type.train) {
    team_list = (sort_func = sort_team_by_train)(
      team_list.filter((cid) => sys_check_train_enabled(cid)),
    );
  } else if (type !== chara_info_type.info) {
    team_list = (sort_func = sort_team_by_all)(
      team_list.filter(
        (cid) =>
          cid > 0 &&
          (get_custom_mec(cid).is_able_to_be_selected() ||
            (era.get(`cflag:${cid}:妊娠阶段`) &
              ((1 << pregnant_stage_enum.resume) +
                (1 << pregnant_stage_enum.pre_birth))) >
              0),
      ),
    );
  }

  let e_filter = era.get('flag:特殊事件筛选') > 0;
  let show_list = team_list;
  if (e_filter) {
    show_list = show_list.filter((cid) => EventMarks.get(cid).count() > 0);
  }

  let max_page = Math.ceil(show_list.length / page_size) || 1;
  const sorters = new Array(11).fill(0);

  /**
   * @param {number} acc
   * @param {string} content
   * @param {number} width
   * @returns {ButtonObject}
   */
  function get_button(acc, content, width) {
    return {
      accelerator: acc,
      config: { align: 'center', showAcc: false, width },
      content: `${content}${arrows[sorters[acc - 1000]]}`,
      type: 'button',
    };
  }

  let flag = true;
  let ret;
  while (flag) {
    await era.clear();
    print_page_header();
    const buffer = [];
    buffer.push({
      config: {
        content: `选择${
          type === chara_info_type.info ? '要查看情报的' : '要互动的'
        }角色 (${show_list.length})`,
      },
      type: 'divider',
    });

    if (show_list.length) {
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
          get_button(1007, '评价', 2),
          get_button(1008, i18n().ui_moti, 2),
          get_button(1009, '战绩', 2),
          get_button(1004, '育成', 2),
          get_button(1010, '周目', 2),
        );
      } else {
        buffer.push(
          get_button(1000, '性别', 2),
          get_button(1001, '年龄', 2),
          get_button(1002, '好感', 2),
          get_button(1003, '爱慕', 2),
          get_button(1004, '育成', 2),
        );
      }
      buffer.push(get_button(1005, '体力', 3), get_button(1006, '精力', 3));
      const cur_list = show_list.slice(
        (page.curr - 1) * page_size,
        page.curr * page_size,
      );
      cur_list.forEach((cid) => {
        const chara = get_chara_talk(cid);
        const titles = CharaTitles.get(cid);
        const title = titles.get_colored_curr_title(true);
        const event_counts =
          type === chara_info_type.school ? EventMarks.get(cid).count() : 0;
        buffer.push({
          accelerator: cid,
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
        } else if (titles.count() > 0) {
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
        buffer.push(...get_suffix(cid, type));
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
          accelerator: 1095,
          config: { disabled: page.curr === 1, width: 3 },
          content: '上一页',
          type: 'button',
        },
        {
          config: { align: 'center', width: 4 },
          content: `第 ${page.curr} 页 / 共 ${max_page} 页`,
          type: 'text',
        },
        {
          accelerator: 1096,
          config: {
            align: 'right',
            disabled: page.curr === max_page,
            width: 3,
          },
          content: '下一页',
          type: 'button',
        },
      );
    }
    switch (type) {
      case chara_info_type.info:
        buffer.push(
          {
            accelerator: 1097,
            config: {
              align: 'right',
              buttonType: e_filter ? 'warning' : 'info',
              width: 11,
            },
            content: `仅显示有特殊事件的角色 [${e_filter ? '开' : '关'}]`,
            type: 'button',
          },
          {
            accelerator: 1099,
            config: { align: 'right', width: 3 },
            content: '返回',
            type: 'button',
          },
        );
        break;
      case chara_info_type.train:
        buffer.push(
          {
            accelerator: 1098,
            config: { align: 'right', width: 11 },
            content: '清空互动',
            type: 'button',
          },
          {
            accelerator: 1099,
            config: { align: 'right', width: 3 },
            content: '返回',
            type: 'button',
          },
        );
        break;
      default:
        buffer.push(
          {
            accelerator: 1097,
            config: {
              align: 'right',
              buttonType: e_filter ? 'warning' : 'info',
              width: 7,
            },
            content: `仅显示有特殊事件的角色 [${e_filter ? '开' : '关'}]`,
            type: 'button',
          },
          {
            accelerator: 1098,
            config: { align: 'right', width: 4 },
            content: '清空互动',
            type: 'button',
          },
          {
            accelerator: 1099,
            config: { align: 'right', width: 3 },
            content: '返回',
            type: 'button',
          },
        );
    }
    era.printMultiColumns(buffer, { horizontalAlign: 'end' });
    switch ((ret = await era.input())) {
      case 1095:
        page.curr--;
        break;
      case 1096:
        page.curr++;
        break;
      case 1097:
        e_filter = era.set('flag:特殊事件筛选', +!e_filter) > 0;
        show_list = e_filter
          ? team_list.filter((cid) => EventMarks.get(cid).count() > 0)
          : team_list;
        max_page = Math.ceil(show_list.length / page_size) || 1;
        if (page.curr >= max_page) {
          page.curr = max_page;
        }
        break;
      case 1098:
        ret = 0;
        flag = false;
        break;
      case 1099:
        ret = undefined;
        flag = false;
        break;
      default:
        if (ret >= 1000) {
          let new_sort = sorters[ret - 1000];
          switch (new_sort) {
            case 0:
              new_sort = -1;
              break;
            case -1:
              new_sort = 1;
              break;
            case 1:
              new_sort = 0;
          }
          sorters.fill(0);
          sorters[ret - 1000] = new_sort;
          if (new_sort !== 0) {
            const has_me = show_list[0] === 0;
            if (has_me) {
              show_list.shift();
            }
            switch (ret) {
              case 1000:
                show_list = sort_list(
                  show_list,
                  (id) => era.get(`cflag:${id}:性别`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1001:
                show_list = sort_list(
                  show_list,
                  (id) =>
                    era.get(`cflag:${id}:成长阶段`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1002:
                show_list = sort_list(
                  show_list,
                  (id) => {
                    let relation = get_relation_info(id).val();
                    if (relation === '?') {
                      relation = new_sort * 601;
                    } else {
                      relation = Number(relation);
                    }
                    return relation * 1000 * new_sort + id;
                  },
                  true,
                );
                break;
              case 1003:
                show_list = sort_list(
                  show_list,
                  (id) => {
                    let love = get_love_info(id).val();
                    if (love === '?') {
                      love = new_sort * 101;
                    } else {
                      love = Number(love);
                    }
                    return love * 1000 * new_sort + id;
                  },
                  true,
                );
                break;
              case 1004:
                show_list = sort_list(
                  show_list,
                  (id) => {
                    let edu_times = era.get(`cflag:${id}:育成回合计时`),
                      palace = era.get(`cflag:${id}:殿堂`);
                    if (edu_times < 3 * 48) {
                      if (new_sort === 1) {
                        edu_times = 144 - edu_times;
                      }
                    } else {
                      edu_times = 144;
                    }
                    if (palace > 0) {
                      if (new_sort === 1) {
                        palace = 3 - palace;
                      }
                    } else {
                      palace = 3;
                    }
                    return edu_times * 10000 + palace * 1000 + id;
                  },
                  true,
                );
                break;
              case 1005:
                show_list = sort_list(
                  show_list,
                  (id) => era.get(`base:${id}:体力`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1006:
                show_list = sort_list(
                  show_list,
                  (id) => era.get(`base:${id}:精力`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1007:
                show_list = sort_list(
                  show_list,
                  (id) => get_chara_score(id, true) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1008:
                show_list = sort_list(
                  show_list,
                  (id) => era.get(`cflag:${id}:干劲`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1009:
                show_list = sort_list(
                  show_list,
                  (id) =>
                    RaceHistory.get(id)
                      .get_values()
                      .filter((e) => e.rank === 1).length *
                      1000 *
                      new_sort +
                    id,
                  true,
                );
                break;
              case 1010:
                show_list = sort_list(
                  show_list,
                  (id) =>
                    era.get(`cflag:${id}:育成次数`) * 1000 * new_sort + id,
                  true,
                );
            }
            if (has_me) {
              show_list.unshift(0);
            }
          } else {
            show_list = sort_func(show_list);
          }
        } else {
          flag = false;
        }
    }
  }
  return ret;
}

module.exports = select_target;
