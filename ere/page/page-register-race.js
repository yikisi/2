const era = require('#/era-electron');

const sys_get_status = require('#/system/chara/sys-get-status');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const game_guides = require('#/event/others/game-guides');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { adaptability_colors, el_danger_color } = require('#/data/color-const');
const grand_lives = require('#/data/event/grand-lives');
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

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number} year_begin
 * @param {number} cur_round
 * @param {{race:number,week:number}} registered_race
 * @returns {boolean}
 */
function check_in_foreign(cid, year_begin, cur_round, registered_race) {
  return (
    foreign_race_list.find((r) => r === registered_race.race) !== void 0 &&
    race_infos[registered_race.race].date + year_begin - cur_round <=
      expedition_weeks
  );
}

/**
 * @param {number} cid
 * @param {boolean} in_foreign
 * @returns {boolean}
 */
function check_register_disabled(cid, in_foreign) {
  return (
    era.get(`status:${cid}:伤病`) ||
    !check_pregnant_unprotect(cid) ||
    in_foreign
  );
}

/**
 * @param {number} cid
 * @returns {{color:string,content:string,fontWeight:string}[]}
 */
function generate_adaptability_dict(cid) {
  return new Array(6).fill(0).map((_, i) => {
    const a = era.get(`cflag:${cid}:${30 + i}`);
    return {
      color: adaptability_colors[a],
      content: get_adaptability_rank(a),
      fontWeight: 'bold',
    };
  });
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
  if (chara_id && !RaceHistory.get(chara_id).check_begin()) {
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
  await game_guides.office_register();
  const cur_round = era.get('flag:当前回合数') - 1;
  const begin_round = cur_round - (cur_round % 4);
  const team_list = sys_filter_chara(
    'cflag',
    '招募状态',
    recruit_flags.yes,
  ).filter(
    (cid) =>
      get_custom_mec(cid).is_race_register_enabled() &&
      era.get(`cflag:${cid}:种族`) &&
      (!cid || era.get(`cflag:${cid}:育成回合计时`) + 1 < 3 * 48) &&
      sys_reg_race(cid).curr.week !== cur_round + 1,
  );
  const year_begin = Math.floor(cur_round / 48) * 48;
  let curr = era.get('flag:当前互动角色');
  let chara = get_chara_talk(curr);
  let registered_race = sys_reg_race(curr).curr;
  let dict = generate_race_dict(
    curr,
    cur_round,
    begin_round,
    year_begin,
    registered_race,
  );
  let adaptability_dict = generate_adaptability_dict(curr);
  let edu_weeks = era.get(`cflag:${curr}:育成回合计时`);
  let flag_race_reg = true;
  let flag_filter_race = true;
  let flag_hide_adaptability = true;
  let in_foreign = check_in_foreign(
    curr,
    year_begin,
    cur_round,
    registered_race,
  );
  let base_disabled_check = check_register_disabled(curr, in_foreign);
  let status_list = sys_get_status(curr);

  while (flag_race_reg) {
    await era.clear();
    era.printInColRows(
      [
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: [
            '为 ',
            chara.get_colored_name(),
            ' 报名下一场比赛',
            { isBr: true },
            ...status_list,
          ],
          type: 'text',
        },
      ],
      ...new Array(12).fill(0).map((_, i) => {
        const round = begin_round + i;
        const year = Math.floor(round / 48);
        const month = Math.floor((round - year * 48) / 4);
        const week = round - year * 48 - month * 4;
        const date_str = `${2000 + year} 年 ${month + 1} 月 第 ${week + 1} 周`;
        const columns = [];
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
        (!curr || edu_weeks + round - cur_round < 48 * 3
          ? dict[round + 1] || []
          : []
        ).forEach((r) => {
          const ground = race_infos[r].ground;
          const distance = race_infos[r].distance;
          const ag = adaptability_dict[ground];
          const ad = adaptability_dict[2 + distance];
          const is_aim_race = get_custom_check(curr).is_aim_race(
            r,
            edu_weeks + round - cur_round,
          );
          const is_foreign = race_infos[r].track >= track_enum.longchamp;
          const is_grand_live = grand_lives.check(
            r,
            +(round - year_begin >= 48),
          );
          if (
            r === race_enum.begin_race ||
            registered_race.race === r ||
            is_aim_race !== 0 ||
            !flag_filter_race ||
            ((ag.content === 'S' || ag.content <= 'C') &&
              (ad.content === 'S' || ad.content <= 'C'))
          ) {
            columns.push(
              {
                accelerator: r,
                config: {
                  align: 'center',
                  buttonType: is_aim_race !== 0 ? 'danger' : 'warning',
                  disabled:
                    base_disabled_check ||
                    (is_foreign &&
                      race_infos[r].date + year_begin - cur_round <=
                        expedition_weeks) ||
                    get_custom_mec(curr).is_race_disabled(r),
                },
                content:
                  race_infos[r].get_colored_name_with_class().content +
                  (is_foreign
                    ? ` (${i18n().race[track2location[race_infos[r].track].con]})`
                    : '') +
                  (is_grand_live ? ' 🎤' : '') +
                  ((is_aim_race & 0b11) > 0 ? ' *' : ''),
                type: 'button',
              },
              {
                config: { align: 'center' },
                content: [
                  ...(flag_hide_adaptability || r === race_enum.begin_race
                    ? []
                    : [
                        di18n.race.a_ground[ground],
                        '(',
                        ag,
                        ')',
                        ' ',
                        race_infos[r].span.toLocaleString(),
                        ' ',
                        di18n.race.a_distance[distance],
                        '(',
                        ad,
                        ') ',
                        ...team_list
                          .filter((en) => sys_reg_race(en).curr.race === r)
                          .map((en) => ({
                            color: get_chara_color(en),
                            content: '𖨆',
                            fontWeight: 'bold',
                          })),
                        registered_race.race === r ? ' ' : '',
                      ]),
                  registered_race.race === r
                    ? {
                        color: el_danger_color,
                        content: '[▲已登记]',
                        display: 'inline-block',
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
      curr
        ? [
            { type: 'divider' },
            {
              content: [
                '* ',
                chara.get_colored_name(),
                ...(RaceHistory.get(chara.id).check_begin()
                  ? [
                      ' 很关注显示为',
                      { color: el_danger_color, content: '红色' },
                      '的比赛',
                    ]
                  : [' 需要先在下半年的出道战出道才能参加其他比赛']),
                { isBr: true },
                '** 参加带有星号(*)后缀的比赛可能会有特殊的事情发生',
                { isBr: true },
                ...(cur_round > 39
                  ? [
                      '*** 带有🎤后缀的比赛会开设大舞台，参加能够获得更多的声望',
                      { isBr: true },
                      '*',
                    ]
                  : []),
                '*** 带有(法)等后缀的比赛是海外赛事，需要在参赛两周前注册，并提前两周出发远征',
              ],
              type: 'text',
            },
          ]
        : [],
      [{ type: 'divider' }],
      team_list.length > 1
        ? team_list.map((cid) => {
            return {
              accelerator: 1000 + cid,
              config: {
                buttonType: cid === curr ? 'warning' : 'info',
                disabled: cid === curr,
                width: 6,
              },
              content: get_display_name(era.get(`callname:${cid}:-1`)),
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
          content: `显示更多信息 [${!flag_hide_adaptability ? '开' : '关'}]`,
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
      curr = ret - 1000;
      chara = get_chara_talk(curr);
      registered_race = sys_reg_race(curr).curr;
      dict = generate_race_dict(
        curr,
        cur_round,
        begin_round,
        year_begin,
        registered_race,
      );
      adaptability_dict = generate_adaptability_dict(curr);
      edu_weeks = era.get(`cflag:${curr}:育成回合计时`);
      in_foreign = check_in_foreign(
        curr,
        year_begin,
        cur_round,
        registered_race,
      );
      base_disabled_check = check_register_disabled(curr, in_foreign);
      status_list = sys_get_status(curr);
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
