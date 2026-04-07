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
const { flat_join_list } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { adaptability_colors, el_danger_color } = require('#/data/color-const');
const { get_date } = require('#/data/date-indicator');
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
const { i18n, lan } = require('#/i18n/selector');

const status_collapse_limit = 59;

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
  const _lan = lan();
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
  let status_list = sys_get_status(curr, status_collapse_limit);

  while (flag_race_reg) {
    await era.clear();
    era.printInColRows(
      [
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: [
            ...i18n().get_ui_reg_header(chara.get_colored_name()),
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
        const date_str = get_date(2000 + year, month + 1, week + 1);
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
                content: i18n()
                  .ui_reg_race_template.replace(
                    '%NAME%',
                    race_infos[r].get_colored_name_with_class().content,
                  )
                  .replace(
                    '%COUNTRY%',
                    is_foreign
                      ? i18n().race[track2location[race_infos[r].track].con]
                      : '',
                  )
                  .replace(
                    '%GRAND%',
                    is_grand_live ? i18n().ui_grand_live_mark : '',
                  )
                  .replace('%MARK%', (is_aim_race & 0b11) > 0 ? ' *' : '')
                  .replace(/\(\s*\)/, '')
                  .trimEnd(),
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
                        race_infos[r].span.toLocaleString(_lan),
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
                        content: i18n().ui_reg_registered,
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
              content: flat_join_list(
                [
                  (RaceHistory.get(chara.id).check_begin()
                    ? i18n().get_ui_reg_tip_1_after_begin
                    : i18n().get_ui_reg_tip_1_before_begin)(
                    chara.get_colored_name(),
                  ),
                  i18n().ui_reg_tip_2,
                  cur_round > 39 ? i18n().ui_reg_tip_3 : void 0,
                  i18n().ui_reg_tip_4,
                ]
                  .filter((c) => c)
                  .map((c, i) =>
                    Array.isArray(c)
                      ? ['*'.repeat(i + 1) + ' ', ...c]
                      : '*'.repeat(i + 1) + ' ' + c,
                  ),
                { isBr: true },
              ),
              type: 'text',
            },
          ]
        : [],
      [{ type: 'divider' }],
      team_list.length > 1
        ? team_list.map((cid) => ({
            accelerator: 1000 + cid,
            config: {
              buttonType: cid === curr ? 'warning' : 'info',
              disabled: cid === curr,
              width: 6,
            },
            content: get_display_name(era.get(`callname:${cid}:-1`)),
            type: 'button',
          }))
        : [],
      [
        {
          accelerator: 997,
          config: {
            buttonType: flag_filter_race ? 'warning' : 'info',
            width: 6,
          },
          content: i18n().ui_reg_race_filter_template.replace(
            '%STATUS%',
            flag_filter_race ? i18n().ui_on : i18n().ui_off,
          ),
          type: 'button',
        },
        {
          accelerator: 998,
          config: {
            buttonType: !flag_hide_adaptability ? 'warning' : 'info',
            width: 6,
          },
          content: i18n().ui_reg_race_more_info.replace(
            '%STATUS%',
            !flag_hide_adaptability ? i18n().ui_on : i18n().ui_off,
          ),
          type: 'button',
        },
        {
          accelerator: 999,
          config: { width: 4 },
          content: i18n().ui_back,
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
      status_list = sys_get_status(curr, status_collapse_limit);
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
