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
const sub_simulate_ero = require('#/system/race/sub-simulate-ero');
const sub_simulate_report = require('#/system/race/sub-simulate-report');
const sub_simulate_skill = require('#/system/race/sub-simulate-skill');

const { get_extremum_entry, median, sort_list } = require('#/utils/list-utils');
const { get_random_value, log_max_wp } = require('#/utils/value-utils');

const { wp_coefficient } = require('#/data/ero/orgasm-const');
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

const { i18n } = require('#/i18n/selector');

/**
 * @param {PseudoUma} uma
 * @param {number} r_index
 * @param {PseudoUma[]} l_in_race
 * @param {RaceInfo} race_info
 * @returns {boolean}
 */
function check_nige_loc_mind_speed_up_mode(uma, r_index, l_in_race, race_info) {
  let temp;
  return (
    (r_index === 0 &&
      (((temp = l_in_race.slice(1).find((e) => e.style === 0)) &&
        uma.race.location - temp.race.location <=
          race_info.loc_mind_diff.nige_speed_up_nige) ||
        ((temp = l_in_race.slice(1).find((e) => e.style > 0)) &&
          uma.race.location - temp.race.location <=
            race_info.loc_mind_diff.nige_speed_up_other))) ||
    uma.race.conditionParams.is_temptation
  );
}

/**
 * @param {PseudoUma} uma
 * @param {number} r_index
 * @param {RaceInfo} race_info
 * @returns {boolean}
 */
function check_nige_loc_mind_over_take_mode(uma, r_index, race_info) {
  return (
    r_index > 0 &&
    uma.race.conditionParams.distance_diff_top <
      race_info.loc_mind_diff.nige_over_take
  );
}

/**
 * @param {PseudoUma} uma
 * @param {number} r_index
 * @param {PseudoUma[]} l
 * @returns {boolean}
 */
function check_nige_loc_mind_ex_mode(uma, r_index, l) {
  const nige_type =
    uma.race.conditionParams.is_used_skill_id.indexOf(202051) + 1;
  return l
    .slice(0, r_index)
    .some(
      (e) =>
        e.style -
          (e.race.conditionParams.is_used_skill_id.indexOf(202051) + 1) >
        -nige_type,
    );
}

/**
 * @param {PseudoUma} uma
 * @param {number} event
 */
function get_loc_mind_event(uma, event) {
  return {
    e: uma.style === uma.race.style ? event : race_event_enum.temp_wrong_style,
    u: uma,
  };
}

/**
 * @param {PseudoUma[]} list_chara
 * @param {RaceInfo} info
 * @param {number} [race_id]
 * @param {boolean} [shown=true]
 */
function sys_sim_race(list_chara, info, race_id, shown = true) {
  const uma_sex_title = get('flag:角色性别')
    ? i18n().name.uma_boy
    : i18n().name.uma_girl;

  /** @type {TextContent[]} */
  const beginning_report =
    race_id === void 0
      ? i18n().timon.race.beginning_report_sim
      : i18n().timon.race.get_beginning_report(
          info.get_colored_name(),
          info.gates.toString(),
          uma_sex_title,
        );
  const current = new Date().getTime();
  const count_uma = list_chara.length;
  const top_pop = list_chara.find((e) => e.pop[0] === 1);
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
  switch (race_id) {
    case race_enum.sats_sho:
      message_buffer.push(
        get_event_record(
          i18n().timon.race.get_prepare_record_sats_sho(
            top_pop.get_colored_name(),
            uma_sex_title,
          ),
        ),
      );
      break;
    case race_enum.toky_yus:
      message_buffer.push(
        get_event_record(
          i18n().timon.race.get_prepare_record_toky_yus(uma_sex_title),
        ),
      );
      break;
    case race_enum.kiku_sho:
      message_buffer.push(
        get_event_record(
          i18n().timon.race.get_prepare_record_kiku_sho(
            info.get_colored_name(),
          ),
        ),
      );
      break;
    case race_enum.takz_kin:
      message_buffer.push(
        i18n().timon.race.get_prepare_record_takz_kin(
          top_pop.get_colored_name(),
        ),
      );
      break;
    case void 0:
      message_buffer.push(
        get_event_record(i18n().timon.race.prepare_record_sim),
      );
      break;
    default:
      message_buffer.push(
        get_event_record(
          i18n().timon.race.get_prepare_record_default(
            info.get_colored_name(),
            uma_sex_title,
          ),
        ),
      );
  }
  let flag_race_phase = 1;
  if (shown) {
    drawLine();
    printInColRows(message_buffer);
  }
  if (race_id !== void 0) {
    if (top_pop.motivation > 0) {
      beginning_report.unshift(
        i18n().timon.race.get_prepare_report_high_mot(
          top_pop.get_colored_name(),
        ),
      );
    } else if (top_pop.motivation < 0) {
      beginning_report.unshift(
        i18n().timon.race.get_prepare_report_low_mot(
          top_pop.get_colored_name(),
        ),
      );
    } else {
      beginning_report.unshift(
        i18n().timon.race.get_prepare_report_normal_mot(
          top_pop.get_colored_name(),
        ),
      );
    }
  } else {
    beginning_report.unshift(i18n().timon.race.prepare_report_sim);
  }

  const start_delay = new Array(count_uma).fill(0);
  const statistics = {
      loc: [{ data: [] }],
      skill: [{ data: [] }],
      speed: [{ data: [] }],
      stamina: [{ data: [] }],
    },
    buffer = { report: [], skill: [] };
  let dynamic_table = [];
  /** @type {*[][]} */
  let report_cache = [];
  Object.keys(statistics).forEach(
    (k) =>
      (statistics[k] = list_chara.map((uma) => ({
        borderColor: uma.color,
        data: [],
        label: uma.name,
        stepped: false,
      }))),
  );

  list_chara.forEach((u) => {
    if (!u.race.conditionParams.item) {
      u.ero.main = ['sex'];
    }
    u.ero.cost.sex =
      -(wp_coefficient * Math.log(u.attrs[attr_enum.toughness])) / log_max_wp;
  });

  dynamic_table.push([
    get_table_header(
      fron_header.slice(0, fron_cols),
      '0.0"',
      0,
      info.span,
      false,
    ),
  ]);

  const lane = info.lanes[0];
  const slope = info.slopes[0]?.start === 0 ? info.slopes[0].slope : 0;
  const loc_mind_end = (info.span * 10) / 24;
  sub_simulate_skill.init(lane, slope);
  sub_simulate_ero.init();

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
      start_delay[uma.index_race] *= s.data.ability_values[0][0];
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
    uma.race.conditionParams.is_goodstart =
      1 - uma.race.conditionParams.is_badstart;

    dynamic_table[0].push(
      get_table_row(uma, fron_records[uma.index_race].slice(0, fron_cols), {
        config: {
          color: uma.color,
          fontColor: 'black',
          height: 22,
          offset: 1,
          width: progress_width,
        },
        inContent: uma.race.conditionParams.is_goodstart
          ? i18n().ui_race_start
          : i18n().ui_race_bad_start,
        percentage: 0,
        type: 'progress',
      }),
    );
  });

  if (race_id !== void 0) {
    if (list_chara.every((e) => !e.race.conditionParams.is_badstart)) {
      buffer.report.unshift(
        get_event_record(
          i18n().timon.race.get_first_report_no_bad_start(uma_sex_title),
          '0.0"',
          0,
        ),
      );
    } else {
      const { max, min } = get_extremum_entry(
        list_chara,
        (e) => start_delay[e.index_race],
      );
      if (max === min) {
        buffer.report.unshift(
          get_event_record(
            i18n().timon.race.get_first_report_no_bad_start(uma_sex_title),
            '0.0"',
            0,
          ),
        );
      } else {
        buffer.report.unshift(
          get_event_record(
            i18n().timon.race.get_first_report(
              min.get_colored_name(),
              max.get_colored_name(),
              uma_sex_title,
            ),
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
        (buffer.report.find((e) => e.speak > 0)?.speak * 3) / 20,
        get_random_value(3.5, 4.5, true),
      ),
      get_random_value(1.5, 2.5, true),
    );
  }

  const list_finished = [];
  let flag_race = true;
  let list_in_race = list_chara;
  let timer = 0;
  let timer_record;
  let next_report = get_report_internal();
  let temp_report;
  let total_blocked = 0;
  let total_failed = 0;

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
        const temp = Math.min(
          Math.max(
            uma.race.velocityReal + uma.race.acceleration / frame_rate,
            uma.base.velocityMin,
          ),
          30,
        );
        uma.race.location += (uma.race.velocityReal + temp) / (2 * frame_rate);
        uma.race.velocityReal = temp;
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
        uma.race.conditionParams.blocked_front = +(
          uma.race.conditionParams.bashin_diff_infront < 0.8 &&
          uma.race.velocityReal > l[i - 1].race.velocityReal
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
        uma.race.overtakeAim = void 0;
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
                (uma.race.velocityReal - l[j].race.velocityReal) <
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

    sub_simulate_ero(
      list_chara,
      timer_record,
      timer,
      report_cache.at(-1),
      buffer.report,
    );

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
      if (uma.race.location < loc_mind_end) {
        if (timer % 2 === 0) {
          const prob_check = Math.random() < uma.probs.loc_mind;
          if (uma.race.style === 0) {
            if (
              uma.race.loc_mind < 3 &&
              check_nige_loc_mind_ex_mode(uma, i, l)
            ) {
              uma.race.loc_mind = 3;
              report_cache
                .at(-1)
                .push(
                  get_loc_mind_event(uma, race_event_enum.loc_mind_nige_ex),
                );
            } else {
              switch (uma.race.loc_mind) {
                case 0:
                  if (prob_check) {
                    if (check_nige_loc_mind_speed_up_mode(uma, i, l, info)) {
                      uma.race.loc_mind = 1;
                      report_cache
                        .at(-1)
                        .push(
                          get_loc_mind_event(
                            uma,
                            race_event_enum.loc_mind_nige_speed_up,
                          ),
                        );
                    } else if (
                      check_nige_loc_mind_over_take_mode(uma, i, info)
                    ) {
                      uma.race.loc_mind = 2;
                      report_cache
                        .at(-1)
                        .push(
                          get_loc_mind_event(
                            uma,
                            race_event_enum.loc_mind_nige_over_take,
                          ),
                        );
                    }
                  }
                  break;
                case 1:
                  if (check_nige_loc_mind_over_take_mode(uma, i, info)) {
                    uma.race.loc_mind = 2;
                    report_cache
                      .at(-1)
                      .push(
                        get_loc_mind_event(
                          uma,
                          race_event_enum.loc_mind_nige_over_take,
                        ),
                      );
                  } else if (
                    !check_nige_loc_mind_speed_up_mode(uma, i, l, info)
                  ) {
                    uma.race.loc_mind = 0;
                  }
                  break;
                case 2:
                  if (check_nige_loc_mind_speed_up_mode(uma, i, l, info)) {
                    uma.race.loc_mind = 1;
                    report_cache
                      .at(-1)
                      .push(
                        get_loc_mind_event(
                          uma,
                          race_event_enum.loc_mind_nige_speed_up,
                        ),
                      );
                  } else if (
                    !check_nige_loc_mind_over_take_mode(uma, i, info)
                  ) {
                    uma.race.loc_mind = 0;
                  }
                  break;
                case 3:
                  if (!check_nige_loc_mind_ex_mode(uma, i, l)) {
                    uma.race.loc_mind = 0;
                  }
              }
            }
          } else if (uma.race.loc_mind < 3 && l[0].style > uma.race.style) {
            uma.race.loc_mind = 3;
            report_cache
              .at(-1)
              .push(get_loc_mind_event(uma, race_event_enum.loc_mind_other_ex));
          } else {
            switch (uma.race.loc_mind) {
              case 0:
                if (prob_check) {
                  if (
                    uma.race.conditionParams.distance_diff_top >=
                    info.loc_mind_diff.other_upper[uma.race.style - 1]
                  ) {
                    uma.race.loc_mind = 1;
                    report_cache
                      .at(-1)
                      .push(
                        get_loc_mind_event(
                          uma,
                          race_event_enum.loc_mind_other_quick,
                        ),
                      );
                  } else if (
                    uma.race.conditionParams.distance_diff_top <=
                      info.loc_mind_diff.other_lower[uma.race.style - 1] &&
                    uma.race.velocityIdealBuff === 0
                  ) {
                    uma.race.loc_mind = 2;
                    report_cache
                      .at(-1)
                      .push(
                        get_loc_mind_event(
                          uma,
                          race_event_enum.loc_mind_other_relax,
                        ),
                      );
                  }
                }
                break;
              case 1:
                if (
                  uma.race.conditionParams.distance_diff_top <=
                    info.loc_mind_diff.other_lower[uma.race.style - 1] &&
                  uma.race.velocityIdealBuff === 0
                ) {
                  uma.race.loc_mind = 2;
                  report_cache
                    .at(-1)
                    .push(
                      get_loc_mind_event(
                        uma,
                        race_event_enum.loc_mind_other_relax,
                      ),
                    );
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
                  info.loc_mind_diff.other_upper[uma.race.style - 1]
                ) {
                  uma.race.loc_mind = 1;
                  report_cache
                    .at(-1)
                    .push(
                      get_loc_mind_event(
                        uma,
                        race_event_enum.loc_mind_other_quick,
                      ),
                    );
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
                if (l[0].style <= uma.race.style) {
                  uma.race.loc_mind = 0;
                }
            }
          }
          if (uma.race.loc_mind === 2 && uma.race.style > 0) {
            uma.race.staminaCost *= 0.6;
          }
        }
      } else {
        uma.race.loc_mind = 0;
      }
      // 阻挡计算
      const strength_coff = get_random_value(0.9349, 0.9354, true);
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
      if (
        uma.race.stamina > 0 &&
        uma.race.conditionParams.run_at_full_speed_random > 0 &&
        uma.race.velocityReal >= uma.race.velocityIdeal
      ) {
        uma.race.acceleration =
          uma.base.accel_full_speed + uma.race.accel_full_speed_buff;
      } else {
        if (uma.race.stamina > 0) {
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
            if (uma.race.loc_mind === 2 && uma.race.style > 0) {
              uma.race.acceleration = race_de_acc[3];
            } else {
              uma.race.acceleration =
                race_de_acc[Math.min(uma.race.conditionParams.phase, 2)];
            }
          }
        } else {
          stamina_before > 0 &&
            report_cache
              .at(-1)
              .push({ e: race_event_enum.lost_stamina, u: uma });
          uma.race.velocityIdeal =
            uma.base.velocityMin + uma.race.velocityIdealBuff;
          uma.race.acceleration = race_de_acc[4];
        }
        uma.race.acceleration += uma.race.accelerationBuff;
      }
    });
    if (timer >= next_report) {
      if (
        (temp_report = sub_simulate_report(
          report_cache,
          list_in_race,
          info,
          race_id,
        )) !== void 0
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
    )) !== void 0
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
          .map((v) => v.toFixed(2));
        return e;
      })),
  );
  const uma_shown_count = list_chara.filter((e) => e.index_chara >= 0).length;
  const team_count = list_chara.filter(
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
    }
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
  });
  return { buffer, dynamic_table, statistics };
}

module.exports = sys_sim_race;
