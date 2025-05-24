const {
  drawLine,
  get,
  logger,
  printInColRows,
  replaceInColRows,
} = require('#/era-electron');

const {
  add_timer,
  fron_cols,
  get_bashin_desc,
  get_event_record,
  get_skill_record,
  get_table_header,
  get_table_row,
  get_timer_record,
  progress_width,
  screen_size,
} = require('#/system/race/snippets');
const sub_simulate_report = require('#/system/race/sub-simulate-report');
const sub_simulate_skill = require('#/system/race/sub-simulate-skill');

const {
  get_extremum_entry,
  get_random_entry,
  median,
  sort_list,
} = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const RaceInfo = require('#/data/race/model/race-info');
const { ability_type_enum } = require('#/data/race/model/uma-skill');
const { race_enum } = require('#/data/race/race-const');
const {
  frame_rate,
  loc_mind_multiply_velocity_ideal,
  mod_stamina_cost_mess_dirt,
  mod_stamina_cost_mess_grass,
  race_de_acc,
  race_event_enum,
  start_acc,
  start_velocity,
} = require('#/data/race/race-sim-const');
const { attr_enum } = require('#/data/train-const');

const beginning_report_handlers = [
  () => ['赛马娘请入闸……', '全部马娘准备妥当……', '准备……', '一开闸！'],
  () => ['赛马娘准备好……', '随时预备起步……', '预备……', '一起步！'],
  (info) => [
    '比赛马上开始……',
    `参赛马娘 ${info.gates} 名……`,
    [`${get('flag:当前年')} 年度 `, info.get_colored_name(), '……'],
    '——开始！',
  ],
];

/**
 * @param {PseudoUma} uma
 * @param {number} i
 * @param {PseudoUma[]} l
 * @param {RaceInfo} race_info
 * @returns {boolean}
 */
function check_nige_loc_mind_speed_up_mode(uma, i, l, race_info) {
  let temp;
  return (
    (i === 0 &&
      (((temp = l.slice(1).find((e) => e.style === 0)) &&
        uma.race.location - temp.race.location <=
          race_info.loc_mind_diff.nige_speed_up_nige) ||
        ((temp = l.slice(1).find((e) => e.style > 0)) &&
          uma.race.location - temp.race.location <=
            race_info.loc_mind_diff.nige_speed_up_other))) ||
    uma.race.conditionParams.is_temptation
  );
}

/**
 * @param {PseudoUma} uma
 * @param {number} i
 * @param {RaceInfo} race_info
 * @returns {boolean}
 */
function check_nige_loc_mind_over_take_mode(uma, i, race_info) {
  return (
    i > 0 &&
    uma.race.conditionParams.distance_diff_top <
      race_info.loc_mind_diff.nige_over_take
  );
}

/**
 * @param {PseudoUma} uma
 * @param {number} i
 * @param {PseudoUma[]} l
 * @returns {boolean}
 */
function check_nige_loc_mind_ex_mode(uma, i, l) {
  const nige_type =
    uma.race.conditionParams.is_used_skill_id.indexOf(202051) + 1;
  return (
    l
      .slice(0, i)
      .findIndex(
        (e) =>
          e.style -
            (e.race.conditionParams.is_used_skill_id.indexOf(202051) + 1) >
          -nige_type,
      ) !== -1
  );
}

/** @type {Record<string,function(RaceInfo,PseudoUma):((string|{content:string})[])>} */
const race_message_handlers = {};
race_message_handlers.undefined = () => ['正在检查跑道……'];
race_message_handlers[race_enum.sats_sho] = (_, top_pop) => [
  top_pop.get_colored_name(),
  ' 顺利入闸，感觉之后会成为名马娘呢。',
];
race_message_handlers[race_enum.toky_yus] = () => [
  '赛马娘一生一度的德比，马上就要决出赢家了。',
];
race_message_handlers[race_enum.kiku_sho] = (info) => [
  '今年的 ',
  info.get_colored_name(),
  ' 可谓战国时代，群雄辈出。',
];
race_message_handlers[race_enum.takz_kin] = (_, top_pop) => [
  '各位的梦想是谁呢？我的梦想是 ',
  top_pop.get_colored_name(),
];
race_message_handlers.default = (info) => [
  '在这 ',
  info.get_colored_name(),
  ' 的赛场上，各位赛马娘也会全力以赴为大家带来梦想。',
];

/**
 * @param {PseudoUma[]} list_chara
 * @param {RaceInfo} info
 * @param {number} [race_id]
 * @param {boolean} [shown=true]
 */
function sys_sim_race(list_chara, info, race_id, shown = true) {
  const beginning_report =
    race_id === undefined
      ? ['正在检查马闸……', '正在检查令枪……', '选手入闸……', '开赛！']
      : get_random_entry(beginning_report_handlers)(info);
  const current = new Date().getTime();
  const count_uma = list_chara.length;
  const top_pop = list_chara.find((e) => e.pop[0] === 1);
  const top_pop_message =
    race_id === undefined
      ? '选手检查蹄铁……'
      : [
          '第 1 人气，',
          top_pop.get_colored_name(),
          ' 今天看上去干劲',
          top_pop.motivation > 0
            ? '满满'
            : top_pop.motivation < 0
              ? '不是很好'
              : '似乎一般',
          '！',
        ];
  const fron_header = new Array(Math.floor(info.span / 200) - 1)
    .fill(0)
    .map((_, i) => (info.span % 200) + (i + 1) * 200);
  const fron_record_index = list_chara.map(() => 0);
  const fron_records = list_chara.map(() => {
    return new Array(Math.floor(info.span / 200)).fill('');
  });
  const has_final_corner = info.lanes.find((e) => e.is_curve && e.is_last);
  const message_buffer = [];
  const mod_stamina_cost_mess =
    info.ground === RaceInfo.ground_enum.grass
      ? mod_stamina_cost_mess_grass[info.mess]
      : mod_stamina_cost_mess_dirt[info.mess];
  const race_message = (
    race_message_handlers[race_id] || race_message_handlers.default
  )(info, top_pop);
  let flag_race_phase = 1;
  message_buffer.push(get_event_record(race_message));
  if (shown) {
    drawLine();
    printInColRows(message_buffer);
  }
  beginning_report.unshift(top_pop_message);

  const start_delay = new Array(count_uma).fill(0);
  const statistics = {
      loc: [{ data: [] }],
      skill: [{ data: [] }],
      speed: [{ data: [] }],
      stamina: [{ data: [] }],
    },
    buffer = { report: [], skill: [] };
  let dynamic_table = [],
    report_cache = [];
  Object.keys(statistics).forEach(
    (k) =>
      (statistics[k] = list_chara.map((uma) => ({
        borderColor: uma.color,
        data: [],
        label: uma.name,
        stepped: false,
      }))),
  );

  dynamic_table.push([
    get_table_header(
      fron_header.slice(0, fron_cols),
      '0.0"',
      0,
      info.span,
      false,
    ),
  ]);

  const lane = info.lanes[0],
    slope = info.slopes[0]?.start === 0 ? info.slopes[0].slope : 0,
    loc_mind_end = (info.span * 10) / 24;
  sub_simulate_skill.init(lane, slope);

  // 出闸
  list_chara.forEach((uma) => {
    statistics.loc[uma.index_race].data.push(0);
    statistics.stamina[uma.index_race].data.push(uma.race.stamina);

    start_delay[uma.index_race] =
      Math.random() * (0.1 - 0.001 * (uma.chara === -2));
    uma.list_skill = uma.list_skill.filter((s) => {
      if (s.data.ability_types[0][0] !== ability_type_enum.StartDash) {
        return true;
      }
      start_delay[uma.index_race] *= s.data.ability_values[0];
      buffer.skill.unshift(get_skill_record(uma, s.data.id, '0.0"', 0));
      uma.race.conditionParams.activate_count_all++;
      uma.race.conditionParams.activate_count_start++;
    });
    statistics.skill[uma.index_race].data.push(
      uma.race.conditionParams.activate_count_all,
    );
    if (start_delay[uma.index_race] < 1 / frame_rate) {
      uma.race.acceleration = start_acc;
      statistics.speed[uma.index_race].data.push(start_velocity);
      uma.race.velocityReal = start_velocity;
    } else {
      statistics.speed[uma.index_race].data.push(0);
    }
    uma.race.conditionParams.is_badstart = Number(
      start_delay[uma.index_race] >= 0.08,
    );

    dynamic_table[0].push(
      get_table_row(uma, fron_records[uma.index_race].slice(0, fron_cols), {
        config: {
          color: uma.color,
          fontColor: 'black',
          height: 22,
          offset: 1,
          width: progress_width,
        },
        inContent: uma.race.conditionParams.is_badstart ? '出迟！' : '出闸！',
        percentage: 0,
        type: 'progress',
      }),
    );
  });

  if (race_id !== undefined) {
    if (
      list_chara.findIndex((e) => e.race.conditionParams.is_badstart) === -1
    ) {
      buffer.report.unshift(
        get_event_record('比赛开始，所有马娘平排出闸！', '0.0"', 0),
      );
    } else {
      const { max, min } = get_extremum_entry(
        list_chara,
        (e) => start_delay[e.index_race],
      );
      if (max === min) {
        buffer.report.unshift(
          get_event_record('比赛开始，所有马娘平排出闸！', '0.0"', 0),
        );
      } else {
        buffer.report.unshift(
          get_event_record(
            [
              '比赛开始，',
              min.get_colored_name(),
              ' 首先跑出！其他马娘紧随其后，最后是',
              Math.random() < 0.5 ? '出闸慢了的 ' : '落后了的 ',
              max.get_colored_name(),
              '！',
            ],
            '0.0"',
            0,
          ),
        );
      }
    }
  }

  function get_report_internal() {
    return Math.max(
      Math.min(
        (buffer.report.at(-1)?.speak * 3) / 20,
        get_random_value(3.5, 4.5, true),
      ),
      get_random_value(1.5, 2.5, true),
    );
  }

  const list_finished = [];
  let flag_race = true,
    list_in_race = list_chara,
    timer = 0,
    timer_record,
    next_report = get_report_internal(),
    temp_report,
    total_blocked = 0,
    total_failed = 0;

  sub_simulate_report.init();
  while (flag_race) {
    timer = add_timer(timer);
    timer_record = get_timer_record(timer);
    report_cache.push([]);

    // 位置和速度结算
    list_in_race.forEach((uma) => {
      if (start_delay[uma.index_race] > 0) {
        if (start_delay[uma.index_race] < 1 / frame_rate) {
          uma.race.location +=
            start_velocity +
            uma.race.acceleration *
              (1 / frame_rate - start_delay[uma.index_race]);
          uma.race.staminaCost =
            ((20 / 144) *
              Math.pow(uma.race.location - uma.base.velocityIdeal + 12, 2) *
              mod_stamina_cost_mess) /
            frame_rate;
          uma.race.location /= frame_rate;
        }
        uma.race.velocityReal = uma.base.velocityMin;
        start_delay[uma.index_race] = 0;
      } else {
        const temp = (uma.race.velocityReal = Math.min(
          Math.max(
            uma.race.velocityReal + uma.race.acceleration / frame_rate,
            uma.base.velocityMin,
          ),
          30,
        ));
        uma.race.location += (uma.race.velocityReal + temp) / (2 * frame_rate);
        uma.race.staminaCost =
          ((20 / 144) *
            (uma.race.velocityReal - uma.base.velocityIdeal + 12) ** 2 *
            mod_stamina_cost_mess) /
          frame_rate;
      }
      const stamina_ratio = uma.race.stamina / uma.base.stamina;
      uma.race.strength = uma.attrs[attr_enum.strength];
      if (stamina_ratio < 0.5) {
        uma.race.strength *= 0.2 + 1.6 * stamina_ratio;
      }
    });

    const finished_count = list_finished.length;
    list_in_race = sort_list(list_in_race, (uma) => uma.race.location).filter(
      (uma, i, l) => {
        uma.rank.last = uma.rank.curr;
        uma.rank.curr = finished_count + i + 1;
        uma.race.conditionParams.bashin_diff_infront =
          (i === 0 ? 50 : l[i - 1].race.location - uma.race.location) / 2.5;
        uma.race.conditionParams.blocked_front = Number(
          uma.race.conditionParams.bashin_diff_infront < 0.8 &&
            uma.race.velocityReal > l[i - 1].race.velocityReal,
        );
        uma.race.conditionParams.bashin_diff_behind =
          (i === l.length - 1
            ? 50
            : uma.race.location - l[i + 1].race.location) / 2.5;
        uma.race.conditionParams.change_order_onetime =
          uma.rank.curr - uma.rank.last;
        if (uma.race.overtakeAim) {
          uma.race.overtakeAim.to_be_overtaken = false;
        }
        uma.race.overtakeAim = undefined;
        let j = i - 1;
        if (uma.race.conditionParams.bashin_diff_infront <= 0.8) {
          uma.race.overtakeAim = l[j];
        } else {
          while (
            j >= 0 &&
            l[j].race.location - uma.race.location < uma.race.visible_dis
          ) {
            if (
              l[j].race.velocityIdeal < uma.race.velocityIdeal &&
              l[j].race.velocityReal < uma.race.velocityReal &&
              (l[j].race.location - uma.race.location) /
                (l[j].race.velocityReal < uma.race.velocityReal) <
                15
            ) {
              uma.race.overtakeAim = l[j];
              break;
            }
            --j;
          }
        }
        if (uma.race.overtakeAim) {
          uma.race.overtakeAim.to_be_overtaken = true;
        }
        uma.race.overtakeAim = l[j];
        if (uma.race.location >= info.span) {
          uma.race.location = info.span;
          list_finished.push(uma);
          uma.race.totalTime = timer_record;
          report_cache.at(-1).push({ e: race_event_enum.finish, u: uma });
          return false;
        } else if (
          fron_record_index[uma.index_race] < fron_header.length &&
          uma.race.location >= fron_header[fron_record_index[uma.index_race]]
        ) {
          fron_records[uma.index_race][fron_record_index[uma.index_race]] =
            timer_record;
          fron_record_index[uma.index_race]++;
        }
        return true;
      },
    );

    const fron_start = Math.max(
        Math.min(median(fron_record_index) - 1, fron_header.length - fron_cols),
        0,
      ),
      fron_end = fron_start + fron_cols;

    dynamic_table.push([
      get_table_header(
        fron_header.slice(fron_start, fron_end),
        timer_record,
        (list_in_race[0] || list_finished[0]).race.location,
        info.span,
        list_in_race.length === 0,
      ),
    ]);

    list_finished.forEach((uma) => {
      dynamic_table.at(-1).push(
        get_table_row(
          uma,
          fron_records[uma.index_race].slice(fron_start, fron_end),
          {
            config: { offset: 1, width: progress_width },
            content:
              uma.rank.curr <= 4 && uma.rank.curr < list_finished.length
                ? get_bashin_desc(uma.race.conditionParams.bashin_diff_behind)
                : '',
            type: 'text',
          },
        ),
      );
      statistics.loc[uma.index_race].data.push(0);
      statistics.speed[uma.index_race].data.push(0);
      statistics.stamina[uma.index_race].data.push(uma.race.stamina);
      statistics.skill[uma.index_race].data.push(
        uma.race.conditionParams.activate_count_all,
      );
    });

    if (!list_in_race.length) {
      flag_race = false;
      continue;
    }

    sub_simulate_skill(
      list_chara,
      list_in_race,
      list_finished,
      info,
      timer,
      mod_stamina_cost_mess,
      dynamic_table,
      fron_records,
      statistics,
      buffer,
      report_cache,
      { fron_end, fron_start, has_final_corner, progress_width, timer_record },
    );

    if (
      list_in_race[0].race.conditionParams.distance_rate >
      20 * flag_race_phase
    ) {
      message_buffer.push(
        get_event_record(beginning_report[flag_race_phase++ - 1]),
      );
      if (shown) {
        replaceInColRows(message_buffer);
      }
    }

    list_in_race.forEach((uma, i, l) => {
      // 位置意识
      if (timer % 2 === 0 && uma.race.location < loc_mind_end) {
        const prob_check = Math.random() < uma.probs.loc_mind;
        if (uma.base.loc_mind_style === 0) {
          if (uma.race.loc_mind < 3 && check_nige_loc_mind_ex_mode(uma, i, l)) {
            uma.race.loc_mind = 3;
            report_cache.at(-1).push({
              e:
                uma.style === uma.base.loc_mind_style
                  ? race_event_enum.loc_mind_nige_ex
                  : race_event_enum.temp_wrong_style,
              u: uma,
            });
          } else {
            switch (uma.race.loc_mind) {
              case 0:
                if (prob_check) {
                  if (check_nige_loc_mind_speed_up_mode(uma, i, l, info)) {
                    uma.race.loc_mind = 1;
                    report_cache.at(-1).push({
                      e:
                        uma.style === uma.base.loc_mind_style
                          ? race_event_enum.loc_mind_nige_speed_up
                          : race_event_enum.temp_wrong_style,
                      u: uma,
                    });
                  } else if (check_nige_loc_mind_over_take_mode(uma, i, info)) {
                    uma.race.loc_mind = 2;
                    report_cache.at(-1).push({
                      e:
                        uma.style === uma.base.loc_mind_style
                          ? race_event_enum.loc_mind_nige_over_take
                          : race_event_enum.temp_wrong_style,
                      u: uma,
                    });
                  }
                }
                break;
              case 1:
                if (check_nige_loc_mind_over_take_mode(uma, i, info)) {
                  uma.race.loc_mind = 2;
                  report_cache.at(-1).push({
                    e:
                      uma.style === uma.base.loc_mind_style
                        ? race_event_enum.loc_mind_nige_over_take
                        : race_event_enum.temp_wrong_style,
                    u: uma,
                  });
                } else if (
                  !check_nige_loc_mind_speed_up_mode(uma, i, l, info)
                ) {
                  uma.race.loc_mind = 0;
                }
                break;
              case 2:
                if (check_nige_loc_mind_speed_up_mode(uma, i, l, info)) {
                  uma.race.loc_mind = 1;
                  report_cache.at(-1).push({
                    e:
                      uma.style === uma.base.loc_mind_style
                        ? race_event_enum.loc_mind_nige_speed_up
                        : race_event_enum.temp_wrong_style,
                    u: uma,
                  });
                } else if (!check_nige_loc_mind_over_take_mode(uma, i, info)) {
                  uma.race.loc_mind = 0;
                }
                break;
              case 3:
                if (!check_nige_loc_mind_ex_mode(uma, i, l)) {
                  uma.race.loc_mind = 0;
                }
            }
          }
        } else if (uma.race.loc_mind < 3 && l[0].style > uma.style) {
          uma.race.loc_mind = 3;
          report_cache.at(-1).push({
            e:
              uma.style === uma.base.loc_mind_style
                ? race_event_enum.loc_mind_other_ex
                : race_event_enum.temp_wrong_style,
            u: uma,
          });
        } else {
          switch (uma.race.loc_mind) {
            case 0:
              if (prob_check) {
                if (
                  uma.race.conditionParams.distance_diff_top >=
                  info.loc_mind_diff.other_upper[uma.race.loc_mind - 1]
                ) {
                  uma.race.loc_mind = 1;
                  report_cache.at(-1).push({
                    e:
                      uma.style === uma.base.loc_mind_style
                        ? race_event_enum.loc_mind_other_quick
                        : race_event_enum.temp_wrong_style,
                    u: uma,
                  });
                } else if (
                  uma.race.conditionParams.distance_diff_top <=
                    info.loc_mind_diff.other_lower[uma.race.loc_mind - 1] &&
                  uma.race.velocityIdealBuff === 0
                ) {
                  uma.race.loc_mind = 2;
                  report_cache.at(-1).push({
                    e:
                      uma.style === uma.base.loc_mind_style
                        ? race_event_enum.loc_mind_other_relax
                        : race_event_enum.temp_wrong_style,
                    u: uma,
                  });
                }
              }
              break;
            case 1:
              if (
                uma.race.conditionParams.distance_diff_top <=
                  info.loc_mind_diff.other_lower[uma.race.loc_mind - 1] &&
                uma.race.velocityIdealBuff === 0
              ) {
                uma.race.loc_mind = 2;
                report_cache.at(-1).push({
                  e:
                    uma.style === uma.base.loc_mind_style
                      ? race_event_enum.loc_mind_other_relax
                      : race_event_enum.temp_wrong_style,
                  u: uma,
                });
              } else if (
                uma.race.conditionParams.distance_diff_top <=
                uma.base.loc_mind_other_diff_random[
                  uma.race.conditionParams.phase
                ]
              ) {
                uma.race.loc_mind = 0;
              }
              break;
            case 2:
              if (
                uma.race.conditionParams.distance_diff_top >=
                info.loc_mind_diff.other_upper[uma.race.loc_mind - 1]
              ) {
                uma.race.loc_mind = 1;
                report_cache.at(-1).push({
                  e:
                    uma.style === uma.base.loc_mind_style
                      ? race_event_enum.loc_mind_other_quick
                      : race_event_enum.temp_wrong_style,
                  u: uma,
                });
              } else if (
                uma.race.velocityIdealBuff > 0 ||
                uma.race.conditionParams.distance_diff_top >=
                  uma.base.loc_mind_other_diff_random[
                    uma.race.conditionParams.phase
                  ]
              ) {
                uma.race.loc_mind = 0;
              }
              break;
            case 3:
              if (l[0].style <= uma.style) {
                uma.race.loc_mind = 0;
              }
          }
        }
        if (uma.race.loc_mind === 2 && uma.style > 0) {
          uma.race.staminaCost *= 0.6;
        }
      } else {
        uma.race.loc_mind = 0;
      }
      const strength_coff =
        uma.race.location >= info.phases[2]
          ? get_random_value(0.9, 1, true)
          : get_random_value(0.7, 0.8, true);
      // 阻挡计算
      const block_percent =
        uma.race.location >= 150 &&
        uma.race.conditionParams.blocked_front > 0 &&
        (uma.race.strength * strength_coff) / l[i - 1].race.strength +
          uma.race.lane_move_buff;
      if (block_percent > 0 && block_percent < 1) {
        total_blocked++;
        if (Math.random() >= block_percent) {
          total_failed++;
          if (
            (uma.race.velocityReal - l[i - 1].race.velocityReal) / frame_rate >
            l[i - 1].race.location - uma.race.location
          ) {
            report_cache.at(-1).push({
              e: race_event_enum.blocked,
              u: uma,
            });
          }
          uma.race.velocityReal = Math.max(
            Math.min(
              l[i - 1].race.velocityReal *
                (0.988 +
                  (0.012 * uma.race.conditionParams.bashin_diff_infront) / 0.8),
              uma.race.velocityReal,
              30,
            ),
            uma.base.velocityMin,
          );
          uma.race.staminaCost *= 1.1;
        }
      }
      const stamina_before = uma.race.stamina;
      uma.race.stamina = Math.min(
        Math.max(uma.race.stamina - uma.race.staminaCost, 0),
        uma.base.stamina,
      );
      if (uma.race.stamina === 0) {
        stamina_before > 0 &&
          report_cache.at(-1).push({ e: race_event_enum.lost_stamina, u: uma });
        uma.race.velocityIdeal =
          uma.base.velocityMin + uma.race.velocityIdealBuff;
        uma.race.acceleration = race_de_acc[4];
      } else {
        uma.race.velocityIdeal += uma.race.velocityIdealBuff;
        if (uma.race.loc_mind > 0) {
          uma.race.velocityIdeal *=
            loc_mind_multiply_velocity_ideal[
              (uma.style > 0) * 3 + uma.race.loc_mind
            ];
        }
        uma.race.velocityIdeal = Math.max(
          Math.min(uma.race.velocityIdeal, 30),
          uma.base.velocityMin,
        );
        if (uma.race.velocityReal > uma.race.velocityIdeal) {
          if (uma.race.loc_mind === 2 && uma.base.loc_mind_style > 0) {
            uma.race.acceleration = race_de_acc[3];
          } else {
            uma.race.acceleration =
              race_de_acc[Math.min(uma.race.conditionParams.phase, 2)];
          }
        }
      }
      uma.race.acceleration += uma.race.accelerationBuff;
    });
    if (timer >= next_report) {
      if (
        (temp_report = sub_simulate_report(
          report_cache,
          list_in_race,
          info,
          race_id,
        )) !== undefined
      ) {
        buffer.report.unshift(
          get_event_record(temp_report, timer_record, timer),
        );
      }
      report_cache = [];
      next_report += get_report_internal();
    }
  }
  if (
    (temp_report = sub_simulate_report(
      report_cache,
      list_in_race,
      info,
      race_id,
    )) !== undefined
  ) {
    buffer.report.unshift(get_event_record(temp_report, timer_record, timer));
  }
  const duration = new Date().getTime() - current;
  logger.debug(
    `比赛模拟：${duration} ms / ${Math.ceil(timer * frame_rate)} 帧，平均 ${(duration / (timer * frame_rate)).toFixed(4)} ms/帧`,
  );
  logger.debug(
    `阻挡&突围：${total_blocked - total_failed}(突围次数)/${total_blocked}(阻挡次数)=${(
      ((total_blocked - total_failed) * 100) /
      total_blocked
    ).toFixed(2)}%`,
  );
  message_buffer.push(get_event_record(beginning_report.at(-1)));
  if (shown) {
    replaceInColRows(message_buffer);
  }
  const speed_min = (22 - info.span / 1000) * 0.85;
  statistics.speed = statistics.speed.map((e) => {
    e.data = e.data.map((v) => Math.max(v, speed_min));
    return e;
  });
  Object.keys(statistics).forEach(
    (k) =>
      (statistics[k] = statistics[k].map((e) => {
        e.data = e.data
          .filter((_, i, l) => i % frame_rate === 0 || i === l.length - 1)
          .map((v) => v.toFixed(1));
        return e;
      })),
  );
  const uma_shown_count = list_chara.filter((e) => e.index_chara >= 0).length,
    team_count = list_chara.filter(
      (e) => e.index_chara >= 0 && !e.legend,
    ).length;
  dynamic_table = dynamic_table.map((l) => {
    if (l.length - 1 <= screen_size) {
      return l;
    }
    let count = screen_size - uma_shown_count;
    if (count > 0) {
      count -= l.slice(1, 6).filter((e) => e.shown).length;
      return [
        l[0],
        ...l.slice(1).filter((e, i) => i < 5 || e.shown || count-- > 0),
      ];
    } else {
      count =
        screen_size -
        team_count -
        l.slice(1, 6).filter((e) => e.shown === 2).length;
      return [
        l[0],
        ...l
          .slice(1)
          .filter(
            (e, i) => i < 5 || e.shown === 1 || (e.shown === 2 && count-- > 0),
          ),
      ];
    }
  });
  return { buffer, dynamic_table, statistics };
}

module.exports = sys_sim_race;
