const era = require('#/era-electron');

const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const GameGuides = require('#/event/game-guides');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { adaptability_colors, el_danger_color } = require('#/data/color-const');
const GrandLives = require('#/data/event/grand-lives');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_adaptability_rank } = require('#/data/info-generator');
const { expedition_weeks } = require('#/data/move-const');
const RaceHistory = require('#/data/race/model/race-history');
const { track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const {
  foreign_race_list,
  track2location,
} = require('#/data/race/race-location');
const { adaptability_names } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} year_begin
 * @param {number} cur_round
 * @param {{race:number,week:number}} registered_race
 * @returns {boolean}
 */
function check_in_foreign(chara_id, year_begin, cur_round, registered_race) {
  return (
    foreign_race_list.find((e) => e === registered_race.race) !== undefined &&
    race_infos[registered_race.race].date + year_begin - cur_round <=
      expedition_weeks
  );
}

function check_register_disabled(chara_id, in_foreign) {
  return (
    era.get(`status:${chara_id}:伤病`) ||
    !check_pregnant_unprotect(chara_id) ||
    in_foreign
  );
}

/**
 * @param {number} chara_id
 * @returns {Record<string,{color:string,content:string,fontWeight:string}>}
 */
function generate_adaptability_dict(chara_id) {
  const dict = {};
  adaptability_names.forEach((e, i) => {
    if (i < 6) {
      const a = era.get(`cflag:${chara_id}:${e}适性`);
      dict[e.substring(0, 1)] = {
        color: adaptability_colors[a],
        content: get_adaptability_rank(a),
        fontWeight: 'bold',
      };
    }
  });
  return dict;
}

/**
 * @param {number} year_begin
 * @param {number} cur_round
 * @param {number} begin_round
 * @param {number} chara_id
 * @param {{race:number,week:number}} registered_race
 * @returns {Record<string,number[]>}
 */
function generate_race_dict(
  chara_id,
  cur_round,
  begin_round,
  year_begin,
  registered_race,
) {
  const dict = {};
  if (chara_id && !new RaceHistory(chara_id).check_begin()) {
    if (registered_race.race === race_enum.begin_race) {
      dict[registered_race.week] = [race_enum.begin_race];
    } else if (cur_round + 1 < year_begin + 20) {
      dict[year_begin + 24] = [race_enum.begin_race];
    } else if (cur_round + 1 <= year_begin + 44) {
      dict[cur_round - (cur_round % 4) + 8] = [race_enum.begin_race];
    }
  } else {
    const edu_years = chara_id
      ? Math.min(Math.floor(era.get(`cflag:${chara_id}:育成回合计时`) / 48), 2)
      : 2;
    race_infos.forEach((e, i) => {
      if (i) {
        [e.date + year_begin, e.date + year_begin + 48].forEach((date, j) => {
          if (
            date > cur_round + 1 &&
            date <= begin_round + 12 &&
            ((1 << (chara_id ? edu_years + j : edu_years)) & e.limit) > 0
          ) {
            (dict[date] || (dict[date] = [])).push(i);
          }
        });
      }
    });
  }
  return dict;
}

async function reg_race_page() {
  await new GameGuides().office_register();
  const cur_round = era.get('flag:当前回合数') - 1,
    begin_round = cur_round - (cur_round % 4),
    team_list = sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
      (chara_id) =>
        get_custom_mec(chara_id).is_race_register_enabled() &&
        era.get(`cflag:${chara_id}:种族`) &&
        (!chara_id || era.get(`cflag:${chara_id}:育成回合计时`) + 1 < 3 * 48) &&
        sys_reg_race(chara_id).curr.week !== cur_round + 1,
    ),
    year_begin = Math.floor(cur_round / 48) * 48;
  let chara_id = era.get('flag:当前互动角色'),
    chara = get_chara_talk(chara_id),
    registered_race = sys_reg_race(chara_id).curr,
    dict = generate_race_dict(
      chara_id,
      cur_round,
      begin_round,
      year_begin,
      registered_race,
    ),
    adaptability_dict = generate_adaptability_dict(chara_id),
    edu_weeks = era.get(`cflag:${chara_id}:育成回合计时`),
    flag_race_reg = true,
    flag_filter_race = true,
    flag_hide_adaptability = true,
    in_foreign = check_in_foreign(
      chara_id,
      year_begin,
      cur_round,
      registered_race,
    ),
    base_disabled_check = check_register_disabled(chara_id, in_foreign),
    grand_lives = new GrandLives();

  while (flag_race_reg) {
    await era.clear();
    era.printInColRows(
      [
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: ['为 ', chara.get_colored_name(), ' 报名下一场比赛'],
          type: 'text',
        },
      ],
      ...new Array(12).fill(0).map((_, i) => {
        const round = begin_round + i,
          year = Math.floor(round / 48),
          month = Math.floor((round - year * 48) / 4),
          week = round - year * 48 - month * 4,
          date_str = `${2000 + year} 年 ${month + 1} 月 第 ${week + 1} 周`,
          columns = [];
        columns.push(
          { config: { offset: 1, width: 22 }, type: 'divider' },
          {
            config: {
              align: 'center',
              fontWeight: cur_round === round ? 'bold' : undefined,
            },
            content: cur_round === round ? `[${date_str}]` : date_str,
            type: 'text',
          },
        );
        (!chara_id || edu_weeks + round - cur_round < 48 * 3
          ? dict[round + 1] || []
          : []
        ).forEach((e) => {
          const ground = adaptability_names[race_infos[e].ground].substring(
              0,
              1,
            ),
            distance = adaptability_names[race_infos[e].distance + 2].substring(
              0,
              1,
            ),
            ag = adaptability_dict[ground],
            ad = adaptability_dict[distance],
            is_aim_race = get_custom_check(chara_id).is_aim_race(
              e,
              edu_weeks + round - cur_round,
            ),
            is_foreign = race_infos[e].track >= track_enum.longchamp,
            is_grand_live = grand_lives.check(
              e,
              Number(round - year_begin >= 48),
            );
          if (
            e === race_enum.begin_race ||
            registered_race.race === e ||
            is_aim_race ||
            !flag_filter_race ||
            ((ag.content === 'S' || ag.content <= 'C') &&
              (ad.content === 'S' || ad.content <= 'C'))
          ) {
            columns.push(
              {
                accelerator: e,
                config: {
                  align: 'center',
                  buttonType: is_aim_race ? 'danger' : 'warning',
                  disabled:
                    base_disabled_check ||
                    (is_foreign &&
                      race_infos[e].date + year_begin - cur_round <=
                        expedition_weeks),
                },
                content:
                  race_infos[e].get_colored_name_with_class().content +
                  (is_foreign
                    ? ` (${track2location[race_infos[e].track].con})`
                    : '') +
                  (is_grand_live ? ' 🎤' : '') +
                  ((is_aim_race & 0x3) > 0 ? ' *' : ''),
                type: 'button',
              },
              {
                config: { align: 'center' },
                content: [
                  ...(flag_hide_adaptability || e === race_enum.begin_race
                    ? []
                    : [
                        ground,
                        '(',
                        adaptability_dict[ground],
                        ')',
                        ' ',
                        race_infos[e].span,
                        ' ',
                        distance,
                        '(',
                        adaptability_dict[distance],
                        ')',
                        registered_race.race === e ? ' ' : '',
                      ]),
                  registered_race.race === e
                    ? {
                        color: el_danger_color,
                        content: '[▲已登记]',
                        fontWeight: 'bold',
                      }
                    : '',
                ],
                type: 'text',
              },
            );
          }
        });
        return {
          columns,
          config: { verticalAlign: 'middle', width: 6 },
        };
      }),
      chara_id
        ? [
            { type: 'divider' },
            {
              content: [
                '* ',
                chara.get_colored_name(),
                ...(new RaceHistory(chara.id).check_begin()
                  ? [
                      ' 很关注显示为',
                      { color: el_danger_color, content: '红色' },
                      '的比赛……',
                    ]
                  : [' 需要先在下半年的出道战出道才能参加其他比赛……']),
                { isBr: true },
                '** 参加带有星号(*)后缀的比赛可能会有特殊的事情发生……',
                { isBr: true },
                ...(cur_round > 39
                  ? [
                      '*** 带有🎤后缀的比赛会开设大舞台，参加能够获得更多的声望……',
                      { isBr: true },
                      '*',
                    ]
                  : []),
                '*** 带有(法)等后缀的比赛是海外赛事，需要在参赛两周前注册，并提前一周出发远征……',
              ],
              type: 'text',
            },
          ]
        : [],
      [{ type: 'divider' }],
      team_list.length > 1
        ? team_list.map((e) => {
            return {
              accelerator: 1000 + e,
              config: {
                buttonType: e === chara_id ? 'warning' : 'info',
                disabled: e === chara_id,
                width: 4,
              },
              content: era.get(`callname:${e}:-1`),
              type: 'button',
            };
          })
        : [],
      [
        {
          accelerator: 997,
          config: {
            buttonType: flag_filter_race ? 'warning' : 'info',
            width: 6,
          },
          content: `筛除不利比赛 [${flag_filter_race ? '开' : '关'}]`,
          type: 'button',
        },
        {
          accelerator: 998,
          config: {
            buttonType: !flag_hide_adaptability ? 'warning' : 'info',
            width: 6,
          },
          content: `显示比赛适性 [${!flag_hide_adaptability ? '开' : '关'}]`,
          type: 'button',
        },
        {
          accelerator: 999,
          config: { width: 4 },
          content: '结束出走登记',
          type: 'button',
        },
      ],
    );
    const ret = await era.input();
    if (ret === 997) {
      flag_filter_race = !flag_filter_race;
    } else if (ret === 998) {
      flag_hide_adaptability = !flag_hide_adaptability;
    } else if (ret === 999) {
      flag_race_reg = false;
    } else if (ret >= 1000) {
      chara_id = ret - 1000;
      chara = get_chara_talk(chara_id);
      registered_race = sys_reg_race(chara_id).curr;
      dict = generate_race_dict(
        chara_id,
        cur_round,
        begin_round,
        year_begin,
        registered_race,
      );
      adaptability_dict = generate_adaptability_dict(chara_id);
      edu_weeks = era.get(`cflag:${chara_id}:育成回合计时`);
      in_foreign = check_in_foreign(
        chara_id,
        year_begin,
        cur_round,
        registered_race,
      );
      base_disabled_check = check_register_disabled(chara_id, in_foreign);
    } else {
      if (registered_race.race === ret) {
        registered_race.race = registered_race.week = -1;
      } else {
        registered_race.race = ret;
        if (ret === race_enum.begin_race) {
          if (cur_round + 1 < year_begin + 20) {
            registered_race.week = year_begin + 24;
          } else {
            registered_race.week = cur_round + 8 - (cur_round % 4);
          }
        } else {
          registered_race.week = race_infos[ret].date + year_begin;
        }
        if (registered_race.week <= cur_round) {
          registered_race.week += 48;
        }
      }
    }
  }
}

module.exports = reg_race_page;
