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

const arrows = { '-1': '▼', 0: '', 1: '▲' };

/**
 * @param {number} chara_id
 * @param {number} race
 * @param {number} palace
 * @param {boolean} in_train
 * @returns {string}
 */
function get_edu_stage(chara_id, race, palace, in_train) {
  if (!chara_id || !race) {
    return '-';
  }
  if (palace > 1) {
    return out_of_train_type[palace - 1];
  }
  if (in_train) {
    return get_train_time(chara_id).substring(0, 3);
  }
  if (era.get(`cflag:${chara_id}:可再次育成`) > 0) {
    return '-';
  }
  return '待入学';
}

/**
 * @param {number} chara_id
 * @param {number} type
 */
function get_suffix(chara_id, type) {
  const ret = [];
  if (type === chara_info_type.train) {
    const chara_score = get_chara_score(chara_id),
      motivation = era.get(`cflag:${chara_id}:干劲`),
      chara_level = get_rank_level(chara_score),
      races = new RaceHistory(chara_id).get_values(),
      wins = races.filter((e) => e.rank === 1).length;
    ret.push(
      {
        config: {
          align: 'center',
          color: adaptability_colors[chara_level],
          width: 2,
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
        content: get_train_time(chara_id).substring(0, 3),
        type: 'text',
      },
      {
        config: { align: 'center', width: 2 },
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
        config: { align: 'center', color: love_colors[love], width: 2 },
        content: love,
        type: 'text',
      },
      {
        config: { align: 'center', width: 2 },
        content: get_edu_stage(chara_id, race, palace, in_train),
        type: 'text',
      },
    );
  }
  ret.push(
    {
      config: {
        color: attr_background_colors['体力'],
        height: 22,
        width: 3,
        barWidth: 20,
      },
      inContent: `${Math.floor(era.get(`base:${chara_id}:体力`))}/${era.get(
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
      inContent: `${Math.floor(era.get(`base:${chara_id}:精力`))}/${era.get(
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

async function select_target(type, page) {
  let sort_func = sort_team_by_id;
  let list_team = filter_chara('cflag', '招募状态', recruit_flags.yes);

  if (type === chara_info_type.train) {
    list_team = list_team.filter((chara_id) =>
      sys_check_train_enabled(chara_id),
    );
    list_team = (sort_func = sort_team_by_train)(list_team);
  } else if (type !== chara_info_type.info) {
    list_team = list_team.filter(
      (e) =>
        e &&
        (get_custom_mec(e).is_able_to_be_selected() ||
          (era.get(`cflag:${e}:妊娠阶段`) & 0b100001) > 0),
    );
    list_team = (sort_func = sort_team_by_all)(list_team);
  }

  const max_page = Math.ceil(list_team.length / 10),
    sorters = new Array(11).fill(0);

  function get_button(accelerator, content, width) {
    return {
      accelerator,
      config: { align: 'center', showAcc: false, width },
      content: `${content}${arrows[sorters[accelerator - 1000]]}`,
      type: 'button',
    };
  }

  let select_flag = true,
    ret;
  page ||= { curr: 1 };
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
          get_button(1007, '评价', 2),
          get_button(1008, '干劲', 2),
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
      const cur_list = list_team.slice((page.curr - 1) * 10, page.curr * 10);
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
          accelerator: 1096,
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
          accelerator: 1097,
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
    if (type === chara_info_type.info) {
      buffer.push({
        accelerator: 1099,
        config: { align: 'right', width: 14 },
        content: '返回',
        type: 'button',
      });
    } else {
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
    }
    era.printMultiColumns(buffer, { horizontalAlign: 'end' });
    switch ((ret = await era.input())) {
      case 1096:
        page.curr--;
        break;
      case 1097:
        page.curr++;
        break;
      case 1098:
        ret = 0;
        select_flag = false;
        break;
      case 1099:
        ret = undefined;
        select_flag = false;
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
            const has_me = list_team[0] === 0;
            if (has_me) {
              list_team.shift();
            }
            switch (ret) {
              case 1000:
                list_team = sort_list(
                  list_team,
                  (id) => era.get(`cflag:${id}:性别`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1001:
                list_team = sort_list(
                  list_team,
                  (id) =>
                    era.get(`cflag:${id}:成长阶段`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1002:
                list_team = sort_list(
                  list_team,
                  (id) => {
                    let relation = get_relation_info(id)[1];
                    relation = relation.substring(1, relation.length - 1);
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
                list_team = sort_list(
                  list_team,
                  (id) => {
                    let love = get_love_info(id)[1];
                    love = love.substring(1, love.length - 1);
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
                list_team = sort_list(
                  list_team,
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
                list_team = sort_list(
                  list_team,
                  (id) => era.get(`base:${id}:体力`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1006:
                list_team = sort_list(
                  list_team,
                  (id) => era.get(`base:${id}:精力`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1007:
                list_team = sort_list(
                  list_team,
                  (id) => get_chara_score(id, true) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1008:
                list_team = sort_list(
                  list_team,
                  (id) => era.get(`cflag:${id}:干劲`) * 1000 * new_sort + id,
                  true,
                );
                break;
              case 1009:
                list_team = sort_list(
                  list_team,
                  (id) =>
                    new RaceHistory(id).get_values().filter((e) => e.rank === 1)
                      .length *
                      1000 *
                      new_sort +
                    id,
                  true,
                );
                break;
              case 1010:
                list_team = sort_list(
                  list_team,
                  (id) =>
                    era.get(`cflag:${id}:育成次数`) * 1000 * new_sort + id,
                  true,
                );
            }
            if (has_me) {
              list_team.unshift(0);
            }
          } else {
            list_team = sort_func(list_team);
          }
        } else {
          select_flag = false;
        }
    }
  }
  return ret;
}

module.exports = select_target;
