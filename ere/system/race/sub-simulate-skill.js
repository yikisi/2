const { logger } = require('#/era-electron');

const {
  add_timer,
  check_phase_random_loc,
  check_random_loc,
  get_skill_record,
  get_table_row,
  handle_temptation,
  progress_width,
  reset_loc_mind_other_diff,
  simulate_ability_usage,
} = require('#/system/race/snippets');

const { sort_list } = require('#/utils/list-utils');

const {
  ability_time_usage_enum,
  ability_type_enum,
  target_type_enum,
} = require('#/data/race/model/uma-skill');
const {
  acc_up_hill_mode,
  frame_rate,
  race_event_enum,
} = require('#/data/race/race-sim-const');
const { i18n } = require('#/i18n/selector');

let top_lane = void 0;
let top_slope = 0;

/**
 * @param {PseudoUma[]} list_chara
 * @param {PseudoUma[]} list_in_race
 * @param {PseudoUma[]} list_finished
 * @param {RaceInfo} race_info
 * @param {number} timer
 * @param {number} mod_stamina_cost_mess
 * @param {[][]} dynamic_table
 * @param {string[][]} fron_records
 * @param {{loc:{data:number[]}[],skill:{data:number[]}[],speed:{data:number[]}[],stamina:{data:number[]}[]}} statistics
 * @param {{report:[],skill:[]}} buffer
 * @param {{e:number,[u]:PseudoUma,[l]:RaceLane,[s]:number}[][]} report_cache
 * @param {{fron_end:number,fron_start:number,progress_width:number,has_final_corner:RaceLane|undefined,timer_record:string}} params
 */
function sub_simulate_skill(
  list_chara,
  list_in_race,
  list_finished,
  race_info,
  timer,
  mod_stamina_cost_mess,
  dynamic_table,
  fron_records,
  statistics,
  buffer,
  report_cache,
  params,
) {
  const top_loc_ir = list_in_race[0].race.location;
  const con_len = top_loc_ir - list_in_race.at(-1).race.location || 1;
  const rs_temp = [0, 0, 0, 0];
  // 模拟技能触发
  list_in_race.forEach((uma, i, l) => {
    const cur_lane = race_info.lanes.find(
      (e) => uma.race.location >= e.start && uma.race.location < e.end,
    );
    const cur_slope = race_info.slopes.find(
      (e) => uma.race.location >= e.start && uma.race.location < e.end,
    );
    if (cur_slope) {
      uma.race.slope = cur_slope.slope;
      if (uma.race.slope > 0 && !uma.race.slopesPassed.includes(cur_slope)) {
        uma.race.slopesPassed.push(cur_slope);
      }
    } else {
      uma.race.slope = 0;
    }
    if (uma.rank.curr === 1) {
      cur_lane !== top_lane &&
        report_cache
          .at(-1)
          .push({ e: race_event_enum.loc_change, l: cur_lane });
      uma.race.slope !== top_slope &&
        report_cache.at(-1).push({
          c: uma.race.slope - top_slope,
          e: race_event_enum.loc_change,
          s: uma.race.slope,
        });
      top_lane = cur_lane;
      top_slope = uma.race.slope;
    }
    dynamic_table.at(-1).push(
      get_table_row(
        uma,
        fron_records[uma.index_race].slice(params.fron_start, params.fron_end),
        {
          config: {
            color: uma.color,
            fontColor: 'black',
            height: 22,
            offset: 1,
            width: progress_width,
          },
          inContent: i18n()
            .ui_race_contestant_progress_template.replace(
              '%LOCATION%',
              uma.race.location === top_loc_ir
                ? i18n().race.first_contestant
                : `${(uma.race.location - top_loc_ir).toFixed(1)}m`,
            )
            .replace('%LANE%', cur_lane.abbr)
            .replace(
              '%SLOPE%',
              uma.race.slope > 0
                ? i18n().race.slope_up
                : uma.race.slope < 0
                  ? i18n().race.slope_down
                  : '',
            )
            .replace(
              '%BLOCKED%',
              uma.race.conditionParams.blocked_front > 0
                ? i18n().race.s_blocked
                : '',
            )
            .replace(
              '%TEMPTATION%',
              uma.race.temptation > 0 ? i18n().race.s_temptation : '',
            )
            .replace(/\(\s*\)/, '')
            .trimEnd(),
          percentage: Math.min(
            Math.max(
              100 - ((top_loc_ir - uma.race.location) * 100) / con_len,
              0,
            ),
            100,
          ),
          type: 'progress',
        },
      ),
    );
    statistics.loc[uma.index_race].data.push(uma.race.location - top_loc_ir);
    statistics.speed[uma.index_race].data.push(uma.race.velocityReal);
    statistics.stamina[uma.index_race].data.push(uma.race.stamina);
    uma.race.conditionParams.furlong = 0;
    if (uma.race.location < 800) {
      uma.race.conditionParams.furlong = Math.floor(uma.race.location / 200);
    }
    while (
      uma.race.conditionParams.phase < 3 &&
      uma.race.location >= race_info.phases[uma.race.conditionParams.phase]
    ) {
      uma.race.conditionParams.phase++;
    }
    if (
      uma.race.location >= (race_info.span * 16) / 24 &&
      uma.race.location < (race_info.span * 17) / 24
    ) {
      uma.race.conditionParams.phase_firstquarter = 2;
    }
    if (uma.race.temptation > 0) {
      uma.race.temptation--;
      if (
        (uma.race.temptation % (3 * frame_rate) === 0 &&
          Math.random() < 0.55) ||
        !uma.race.temptation
      ) {
        report_cache.at(-1).push({ e: race_event_enum.temp_end, u: uma });
        uma.race.temptation = 0;
        uma.race.conditionParams.is_temptation = 0;
        uma.race.style = uma.style;
        uma.race.loc_mind = 0;
        reset_loc_mind_other_diff(uma, race_info);
      }
    } else if (
      uma.base.temptationSpan < race_info.span &&
      uma.race.location >= uma.base.temptationSpan
    ) {
      handle_temptation(uma, race_info);
      report_cache.at(-1).push({ e: race_event_enum.temptation, u: uma });
      uma.base.temptationSpan = 50000;
      uma.race.temptation = 12 * frame_rate;
      uma.race.conditionParams.is_temptation = 1;
      uma.race.conditionParams.temptation_count++;
    }
    uma.race.conditionParams.accumulatetime = timer;
    if (i === 0) {
      uma.race.conditionParams.blocked_front = 0;
    }
    if (uma.rank.curr !== uma.rank.last) {
      uma.race.conditionParams.behind_near_lane_time =
        uma.race.conditionParams.behind_near_lane_time_set1 =
        uma.race.conditionParams.blocked_front_continuetime =
        uma.race.conditionParams.blocked_side_continuetime =
        uma.race.conditionParams.infront_near_lane_time =
          0;
    } else {
      if (uma.race.conditionParams.bashin_diff_infront <= 1) {
        uma.race.conditionParams.infront_near_lane_time = add_timer(
          uma.race.conditionParams.infront_near_lane_time,
        );
      }
      if (uma.race.conditionParams.blocked_front > 0) {
        uma.race.conditionParams.blocked_front_continuetime =
          uma.race.conditionParams.blocked_side_continuetime = add_timer(
            uma.race.conditionParams.blocked_side_continuetime,
          );
        if (uma.race.conditionParams.phase === 1) {
          uma.race.middleBlockedContinueTime = add_timer(
            uma.race.middleBlockedContinueTime,
          );
        }
      }
      if (uma.race.conditionParams.bashin_diff_behind <= 1) {
        uma.race.conditionParams.behind_near_lane_time = add_timer(
          uma.race.conditionParams.behind_near_lane_time,
        );
        uma.race.conditionParams.behind_near_lane_time_set1 = add_timer(
          uma.race.conditionParams.behind_near_lane_time_set1,
        );
      }
    }
    if (uma.rank.curr < uma.rank.last) {
      if (uma.race.conditionParams.phase === 1) {
        uma.race.conditionParams.change_order_up_middle++;
      } else if (uma.race.conditionParams.phase >= 2) {
        uma.race.conditionParams.change_order_up_end_after++;
        if (cur_lane.is_curve) {
          uma.base.change_order_finalcorner++;
        }
      }
      uma.list_skill.forEach((e) => {
        for (let i = 0; i < e.ability_time.length; ++i) {
          if (
            e.ability_time[i] > 0 &&
            e.data.ability_time_usages[i] ===
              ability_time_usage_enum.order_change &&
            uma.race.order_change++ < 3
          ) {
            e.ability_time[i] += frame_rate;
            for (let j = 0; j < e.values[i].length; ++j) {
              e.values[i][j] += e.data.ability_values[i][j];
              switch (e.data.ability_types[i][j]) {
                case ability_type_enum.CurrentSpeed:
                case ability_type_enum.CurrentSpeedWithNaturalDeceleration:
                  uma.race.velocityIdealBuff += e.data.ability_values[i][j];
                  uma.race.velocityReal += e.data.ability_values[i][j];
                  break;
                case ability_type_enum.TargetSpeed:
                  uma.race.velocityIdealBuff += e.data.ability_values[i][j];
                  break;
                case ability_type_enum.Accel:
                  uma.race.accelerationBuff += e.data.ability_values[i][j];
              }
            }
          }
        }
      });
    }
    uma.race.conditionParams.corner = cur_lane.corner;
    uma.race.conditionParams.distance_diff_rate =
      ((top_loc_ir - uma.race.location) * 100) / con_len;
    uma.race.conditionParams.distance_diff_top = top_loc_ir - uma.race.location;
    uma.race.conditionParams.distance_diff_top_float =
      uma.race.conditionParams.distance_diff_top * 10;
    uma.race.conditionParams.distance_rate =
      (uma.race.location * 100) / race_info.span;
    uma.race.conditionParams.hp_per =
      (uma.race.stamina * 100) / uma.base.stamina;
    uma.race.conditionParams.is_activate_any_skill = Number(
      uma.list_skill.some(
        (e) => e.ability_time[0] > 0 || e.ability_time[1] > 0,
      ),
    );
    uma.race.conditionParams.is_finalcorner = Number(
      params.has_final_corner && cur_lane.is_last,
    );
    uma.race.conditionParams.is_finalcorner_laterhalf = Number(
      uma.race.conditionParams.is_finalcorner &&
        (uma.race.location - cur_lane.start) /
          (race_info.span - cur_lane.start) >=
          0.5,
    );
    const pre_last_straight = uma.race.conditionParams.is_last_straight;
    uma.race.conditionParams.is_last_straight = Number(
      !cur_lane.is_curve && cur_lane.is_last,
    );
    uma.race.conditionParams.is_last_straight_onetime = Number(
      pre_last_straight === 0 &&
        uma.race.conditionParams.is_last_straight === 1,
    );
    uma.race.conditionParams.is_overtake = Number(
      uma.race.overtakeAim !== void 0,
    );
    uma.race.conditionParams.near_count = 0;
    uma.race.conditionParams.near_infront_count = 0;
    for (let k = i - 1; k >= 0; --k) {
      if (l[k].race.location - uma.race.location >= 3) {
        break;
      }
      uma.race.conditionParams.near_count++;
      uma.race.conditionParams.near_infront_count++;
    }
    uma.race.conditionParams.is_surrounded = Number(
      uma.race.conditionParams.near_count >= 3,
    );
    for (let k = i + 1; k < l.length; ++k) {
      if (uma.race.location - l[k].race.location >= 3) {
        break;
      }
      uma.race.conditionParams.near_count++;
    }
    uma.race.conditionParams.order = uma.rank.curr;
    const order_rate = (uma.race.conditionParams.order_rate =
      (uma.rank.curr * 100) / list_chara.length);
    if (uma.race.conditionParams.phase <= 1 && timer > 5) {
      if (order_rate > 20) {
        uma.race.conditionParams.order_rate_in20_continue = 0;
      } else if (order_rate < 20) {
        uma.race.conditionParams.order_rate_out20_continue = 0;
      }
      if (order_rate < 40) {
        uma.race.conditionParams.order_rate_out40_continue = 0;
      }
      if (order_rate > 50) {
        uma.race.conditionParams.order_rate_in50_continue = 1;
      } else if (order_rate < 50) {
        uma.race.conditionParams.order_rate_out50_continue = 0;
      }
      if (order_rate < 70) {
        uma.race.conditionParams.order_rate_out70_continue = 0;
      }
      if (order_rate > 80) {
        uma.race.conditionParams.order_rate_in80_continue = 0;
      }
    }
    if (
      uma.race.overtakeAim &&
      uma.race.overtakeAim.rank.curr === uma.race.overtakeAim.rank.last
    ) {
      uma.race.conditionParams.overtake_target_no_order_up_time = add_timer(
        uma.race.conditionParams.overtake_target_no_order_up_time,
      );
    } else {
      uma.race.conditionParams.overtake_target_no_order_up_time = 0;
    }
    if (uma.flag.to_be_overtaken) {
      uma.race.conditionParams.overtake_target_time = add_timer(
        uma.race.conditionParams.overtake_target_time,
      );
    } else {
      uma.race.conditionParams.overtake_target_time =
        uma.race.conditionParams.overtake_target_time = 0;
    }
    uma.race.conditionParams.remain_distance =
      race_info.span - uma.race.location;
    if (uma.race.slope > 0) {
      uma.race.conditionParams.slope = 1;
    } else if (uma.race.slope < 0) {
      uma.race.conditionParams.slope = 2;
    } else {
      uma.race.conditionParams.slope = 0;
    }
    uma.race.conditionParams.temptation_opponent_count_infront = l.filter(
      (e, j) => j < i && e.race.temptation > 0,
    ).length;
    uma.race.conditionParams.temptation_opponent_count_behind = l.filter(
      (e, j) => j > i && e.race.temptation > 0,
    ).length;
    uma.race.conditionParams.visiblehorse = list_in_race.length - 1;
    uma.race.conditionParams.all_corner_random = 0;
    if (
      uma.race.location >= uma.random.all_corner[uma.random.all_corner_index]
    ) {
      if (
        uma.race.location <=
        uma.random.all_corner[uma.random.all_corner_index] + 10
      ) {
        uma.race.conditionParams.all_corner_random = 1;
      } else {
        uma.random.all_corner_index++;
      }
    }
    uma.race.conditionParams.corner_random = 0;
    if (uma.race.location >= uma.random.corner[uma.random.corner_index]?.loc) {
      if (
        uma.race.location <=
        uma.random.corner[uma.random.corner_index].loc + 10
      ) {
        uma.race.conditionParams.corner_random =
          uma.random.corner[uma.random.corner_index].corner;
      } else {
        uma.random.corner_index++;
      }
    }
    check_random_loc(uma, 'distance_rate_after', 50);
    check_random_loc(uma, 'down_slope', 1);
    check_random_loc(uma, 'is_finalcorner', 1);
    check_random_loc(uma, 'last_straight', 1);
    check_phase_random_loc(uma, 'phase', uma.race.conditionParams.phase);
    check_phase_random_loc(uma, 'phase_corner', uma.race.conditionParams.phase);
    check_phase_random_loc(
      uma,
      'phase_firsthalf',
      uma.race.conditionParams.phase,
    );
    check_phase_random_loc(
      uma,
      'phase_firstquarter',
      uma.race.conditionParams.phase,
    );
    check_phase_random_loc(
      uma,
      'phase_laterhalf',
      uma.race.conditionParams.phase,
    );
    check_random_loc(uma, 'straight', 1);
    check_random_loc(uma, 'up_slope', 1);

    if (uma.race.temptation > 0) {
      rs_temp[uma.style]++;
    }
  });

  list_in_race.forEach((uma, index, arr) => {
    uma.race.conditionParams.running_style_temptation_opponent_count_nige =
      rs_temp[0] - (uma.style === 0 && uma.race.temptation > 0);
    uma.race.conditionParams.running_style_temptation_opponent_count_senko =
      rs_temp[1] - (uma.style === 1 && uma.race.temptation > 0);
    uma.race.conditionParams.running_style_temptation_opponent_count_sashi =
      rs_temp[2] - (uma.style === 2 && uma.race.temptation > 0);
    uma.race.conditionParams.running_style_temptation_opponent_count_oikomi =
      rs_temp[3] - (uma.style === 3 && uma.race.temptation > 0);
    // 重置目标速度和加速度为赛段基础值
    uma.race.velocityIdeal =
      uma.base.velocityIdeal *
      uma.factorPhase.vStyle[Math.min(uma.race.conditionParams.phase, 2)];
    uma.race.acceleration =
      uma.base.acceleration *
      uma.factorPhase.aStyle[Math.min(uma.race.conditionParams.phase, 2)] *
      (uma.race.slope > 0 ? acc_up_hill_mode : 1);
    // 终盘时则再附加部分变动
    if (uma.race.conditionParams.phase >= 2) {
      uma.race.velocityIdeal += uma.factorFinal.vIdealAdd;
      uma.race.staminaCost *= uma.factorFinal.sCostMult;
    }
    // 重置全力冲刺基础加速度
    uma.base.accel_full_speed =
      (0.068 * uma.race.acceleration) / (race_info.span / 1000) ** 1.5;
    // 每个赛段的随机浮动
    uma.race.velocityIdeal +=
      uma.factorPhase.vRand[Math.min(uma.race.conditionParams.phase, 2)];
    // 冲刺
    if (
      uma.flag.allowPlan &&
      uma.race.conditionParams.phase >= 2 &&
      uma.race.location < race_info.span - 60
    ) {
      uma.flag.allowPlan = false;
      // 计算使用的终点位置在真正终点前60M
      let distLeft = race_info.span - 60 - uma.race.location;
      let planVelocity = uma.base.velocityMaxRush;
      let planStaminaCost =
        (20 / 144) *
        (planVelocity - uma.base.velocityIdeal + 12) ** 2 *
        mod_stamina_cost_mess *
        uma.factorFinal.sCostMult;
      // 体力足够以最大冲刺速度跑完则直接冲
      if (planStaminaCost * distLeft <= uma.race.stamina * planVelocity) {
        uma.race.velocityPlanRush = planVelocity;
        uma.race.locationPlanRush = uma.race.location;
        uma.race.conditionParams.lastspurt = 2;
      } else {
        // 否则以每次降0.1冲刺速度为一版计划计算总耗时
        // 先预测自己在终盘非冲刺下的情况
        let endSectVelocity =
          uma.base.velocityIdeal * uma.factorPhase.vStyle[2] +
          uma.factorFinal.vIdealAdd;
        let endSectStaminaCost =
          (20 / 144) *
          Math.pow(endSectVelocity - uma.base.velocityIdeal + 12, 2) *
          mod_stamina_cost_mess *
          uma.factorFinal.sCostMult;
        // 提出冲刺计划
        let listPlan = [];
        while ((planVelocity -= 0.1) > endSectVelocity) {
          // 预测冲刺计划的耐力消耗
          planStaminaCost =
            (20 / 144) *
            Math.pow(planVelocity - uma.base.velocityIdeal + 12, 2) *
            mod_stamina_cost_mess *
            uma.factorFinal.sCostMult;
          // 计算最合理的冲刺距离 以求刚好在终点用光耐力……理论上耐力够了就直接冲了不过这里
          let rushDistance =
            (planVelocity *
              (uma.race.stamina * endSectVelocity -
                distLeft * endSectStaminaCost)) /
            (planStaminaCost * endSectStaminaCost -
              endSectVelocity * planVelocity);
          // 但如果耐力连非冲刺状态都不够的情况 需要兜底
          rushDistance = rushDistance < 0 ? 0 : rushDistance;
          let timeRush = Math.ceil(rushDistance / planStaminaCost);
          let rushLocation = race_info.span - 60 - timeRush * planVelocity;
          let timeNorm = Math.ceil(
            (rushLocation - uma.race.location) / uma.race.velocityIdeal,
          );
          // 记录计划冲刺速度 所用时间 及开始位置
          let itemPlan = {
            velocity: planVelocity,
            time: timeRush + timeNorm,
            location: rushLocation,
          };
          listPlan.push(itemPlan);
        }
        for (const itemPlan of sort_list(listPlan, (e) => e.time, true)) {
          if (Math.random() < uma.probs.planRush) {
            uma.race.velocityPlanRush = itemPlan.velocity;
            uma.race.locationPlanRush = itemPlan.location;
            uma.race.conditionParams.lastspurt = 1;
            break;
          }
        }
      }
      uma.flagAllowPlan = false;
    }
    if (
      !uma.race.conditionParams.is_lastspurt &&
      uma.race.location >= uma.race.locationPlanRush
    ) {
      report_cache.at(-1).push({ e: race_event_enum.final_push, u: uma });
      uma.race.conditionParams.is_lastspurt = 1;
    }
    if (uma.race.conditionParams.is_lastspurt > 0) {
      uma.race.velocityIdeal = uma.race.velocityPlanRush;
      if (
        !uma.race.conditionParams.run_at_full_speed_random &&
        uma.race.velocityPlanRush === uma.base.velocityMaxRush &&
        uma.race.velocityReal >= uma.race.velocityIdeal
      ) {
        report_cache
          .at(-1)
          .push({ e: race_event_enum.full_speed_push, u: uma });
        uma.race.conditionParams.run_at_full_speed_random = 1;
      }
    }
    // 追比
    if (uma.race.competeFightAim) {
      if (
        Math.abs(uma.race.competeFightAim.race.location - uma.race.location) >=
          3 ||
        Math.abs(
          uma.race.competeFightAim.race.velocityIdeal - uma.race.velocityIdeal,
        ) >= 0.6 ||
        uma.race.competeFightAim.race.conditionParams.order_rate > 50 ||
        uma.race.conditionParams.hp_per < 5
      ) {
        uma.race.competeFightAim = void 0;
        uma.race.competeFightTimer = 0;
      } else {
        uma.race.competeFightTimer = add_timer(uma.race.competeFightTimer);
      }
    } else if (
      uma.race.conditionParams.is_last_straight &&
      uma.race.conditionParams.hp_per >= 15
    ) {
      for (let k = index - 1; k >= 0; --k) {
        if (arr[k].race.conditionParams.order_rate > 50) {
          continue;
        }
        if (arr[k].race.location - uma.race.location >= 3) {
          break;
        }
        if (Math.abs(arr[k].race.location - uma.race.velocityReal) < 0.6) {
          uma.race.competeFightAim = arr[k];
          uma.race.competeFightTimer = 0;
          break;
        }
      }
    }
    if (uma.race.competeFightTimer >= 2) {
      if (uma.race.competeFightTimer === 2) {
        report_cache.at(-1).push({
          a: uma.race.competeFightAim,
          e: race_event_enum.compete_fight,
          u: uma,
        });
      }
      uma.race.velocityIdeal += uma.factorFinal.vCompeteFightBuff;
      uma.race.acceleration += uma.factorFinal.accCompeteFightBuff;
      uma.race.conditionParams.compete_fight_count = 1;
    } else {
      uma.race.conditionParams.compete_fight_count = 0;
    }
    if (uma.race.slope >= 0) {
      uma.flag.downhill = false;
      uma.race.downhill = 0;
      uma.race.velocityIdeal -= uma.race.slope * uma.factorSlope.up;
    } else if (uma.flag.downhill) {
      uma.flag.downhill =
        uma.race.downhill % frame_rate > 0 || Math.random() > 0.2;
      if (!uma.flag.downhill) {
        uma.race.downhill = 0;
      }
    } else if (timer % 1 === 0) {
      uma.flag.downhill = Math.random() < uma.factorSlope.down;
    }
    if (uma.flag.downhill) {
      uma.race.downhill++;
      uma.race.velocityIdeal += 0.3 - uma.race.slope / 10;
      uma.race.staminaCost *= 0.4;
    }
    uma.list_skill.forEach((skill) => {
      uma.race.conditionParams.is_activate_other_skill_detail = Number(
        skill.data.is_two_phase && skill.count[0] > 0,
      );
      for (let i = 0; i < skill.data.ability_times.length; ++i) {
        if (skill.ability_time[i] > 0) {
          skill.ability_time[i]--;
          if (skill.ability_time[i] <= 0) {
            skill.ability_time[i] = 0;
            for (let j = 0; j < skill.data.ability_types.length; ++j) {
              switch (skill.data.ability_types[i][j]) {
                case ability_type_enum.CurrentSpeed:
                  skill.aims[i][j].forEach((e) => {
                    e.race.velocityIdealBuff -= skill.values[i][j];
                    e.race.velocityReal -= skill.values[i][j];
                  });
                  break;
                case ability_type_enum.CurrentSpeedWithNaturalDeceleration:
                case ability_type_enum.TargetSpeed:
                  skill.aims[i][j].forEach(
                    (e) => (e.race.velocityIdealBuff -= skill.values[i][j]),
                  );
                  break;
                case ability_type_enum.VisibleDistance:
                  skill.aims[i][j].forEach(
                    (e) => (e.race.visible_dis -= skill.values[i][j]),
                  );
                  break;
                case ability_type_enum.LaneMoveSpeed:
                  skill.aims[i][j].forEach(
                    (e) => (e.race.lane_move_buff += skill.values[i][j]),
                  );
                  break;
                case ability_type_enum.Accel:
                  skill.aims[i][j].forEach((e) => {
                    e.race.accelerationBuff -= skill.values[i][j];
                    e.race.acceleration -= skill.values[i][j];
                  });
                  break;
                // case ability_type_enum.TargetLane:
                case ability_type_enum.AccelFullSpeed:
                  skill.aims[i][j].forEach(
                    (u) => (u.race.accel_full_speed_buff -= skill.values[i][j]),
                  );
              }
            }
            skill.aims[i] = [];
            skill.values[i] = [];
          }
        }
        skill.precondition[i] ||= skill.data.preconditions[i](
          uma.race.conditionParams,
        );
        if (
          !skill.ability_time[0] &&
          skill.cooldown[i] <= 0 &&
          skill.data.cooldown_times[i] > 0 &&
          skill.precondition[i] &&
          skill.data.conditions[i](uma.race.conditionParams) &&
          !(i === 0 && skill.data.is_two_phase && skill.count[i] > 0)
        ) {
          switch (skill.data.id) {
            case 203061:
            case 203071:
              uma.race.conditionParams.is_used_skill_id.push(skill.data.id);
              break;
            case 204452:
              if (i === 0) {
                uma.race.conditionParams.is_used_skill_id_with_detail_one.push(
                  skill.data.id,
                );
              }
          }
          uma.race.conditionParams.is_activate_any_skill = 1;
          skill.count[i]++;
          skill.ability_time[i] =
            (skill.data.ability_times[i] * frame_rate * race_info.span) / 1000;
          skill.cooldown[i] = skill.data.cooldown_times[i] * frame_rate;
          if (uma.chara === -1) {
            skill.cooldown[i] = Math.floor(skill.cooldown[i] * 0.99);
          }
          if (!skill.data.is_two_phase) {
            skill.cooldown[1 - i] = skill.cooldown[i];
          }
          switch (skill.data.ability_time_usages[i]) {
            case ability_time_usage_enum.normal:
            case ability_time_usage_enum.order_change:
              skill.ability_time[i] *= race_info.span / 1000;
              break;
            case ability_time_usage_enum.top_distance:
              skill.ability_time[i] *= Math.min(
                0.8 + uma.race.conditionParams.distance_diff_top / 62.5,
                1.6,
              );
              break;
            case ability_time_usage_enum.stamina:
              if (uma.race.stamina >= 3500) {
                skill.ability_time[i] *= 4;
              } else if (uma.race.stamina >= 3200) {
                skill.ability_time[i] *= 3.5;
              } else if (uma.race.stamina >= 3000) {
                skill.ability_time[i] *= 3;
              } else if (uma.race.stamina >= 2800) {
                skill.ability_time[i] *= 2.5;
              } else if (uma.race.stamina >= 2600) {
                skill.ability_time[i] *= 2.2;
              } else if (uma.race.stamina >= 2400) {
                skill.ability_time[i] *= 2;
              } else if (uma.race.stamina >= 2000) {
                skill.ability_time[i] *= 1.5;
              }
              break;
            case ability_time_usage_enum.blocked_side_continuetime:
              skill.ability_time[i] *=
                Math.min(
                  Math.floor(uma.race.middleBlockedContinueTime / 2),
                  3,
                ) + 1;
              break;
            case ability_time_usage_enum.up_slope:
              skill.ability_time[i] *=
                Math.min(uma.race.slopesPassed.length, 4) + 1;
          }
          for (let j = 0; j < skill.data.ability_types[i].length; ++j) {
            if (skill.data.ability_types[i][j] > 0) {
              let temp;
              if (!skill.aims[i][j]) {
                switch (skill.data.target_types[i][j]) {
                  case target_type_enum.no:
                    skill.aims[i][j] = [];
                    break;
                  case target_type_enum.Self:
                    skill.aims[i][j] = [uma];
                    break;
                  case target_type_enum.All:
                    skill.aims[i][j] = list_in_race.filter((e) => e !== uma);
                    break;
                  case target_type_enum.Visible:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) =>
                        e !== uma &&
                        Math.abs(e.race.location - uma.race.location) <
                          uma.race.visible_dis,
                    );
                    break;
                  case target_type_enum.TeamMember:
                    skill.aims[i][j] =
                      uma.base.total_attrs[0] > 0
                        ? [uma]
                        : list_in_race.filter(
                            (e) => e !== uma && e.base.total_attrs[0] > 0,
                          );
                    break;
                  case target_type_enum.OrderInfront:
                    temp = list_finished.length;
                    if (temp < skill.data.target_values[i][j]) {
                      skill.aims[i][j] = list_in_race.slice(
                        0,
                        skill.data.target_values[i][j] - temp,
                      );
                    } else {
                      skill.aims[i][j] = [];
                    }
                    break;
                  case target_type_enum.SelfInfront:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) => e.race.location > uma.race.location,
                    );
                    if (skill.data.target_values[i][j] > 0) {
                      skill.aims[i][j] = skill.aims[i][j].slice(
                        Math.max(
                          skill.aims[i][j].length -
                            skill.data.target_values[i][j],
                          0,
                        ),
                      );
                    }
                    break;
                  case target_type_enum.SelfBehind:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) => e.race.location < uma.race.location,
                    );
                    if (skill.data.target_values[i][j] > 0) {
                      skill.aims[i][j] = skill.aims[i][j].slice(
                        0,
                        skill.data.target_values[i][j],
                      );
                    }
                    break;
                  case target_type_enum.RunningStyleOtherSelf:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) => e.style + 1 === skill.data.target_values[i][j],
                    );
                    break;
                  case target_type_enum.SelfInfrontTemptation:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) =>
                        e.race.location > uma.race.location &&
                        e.race.temptation > 0,
                    );
                    if (skill.data.target_values[i][j] > 0) {
                      skill.aims[i][j] = skill.aims[i][j].slice(
                        Math.max(
                          skill.aims[i][j].length -
                            skill.data.target_values[i][j],
                          0,
                        ),
                      );
                    }
                    break;
                  case target_type_enum.SelfBehindTemptation:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) =>
                        e.race.location < uma.race.location &&
                        e.race.temptation > 0,
                    );
                    if (skill.data.target_values[i][j] > 0) {
                      skill.aims[i][j] = skill.aims[i][j].slice(
                        0,
                        skill.data.target_values[i][j],
                      );
                    }
                    break;
                  case target_type_enum.RunningStyleTemptationOtherSelf:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) =>
                        e !== uma &&
                        uma.style + 1 === skill.data.target_values[i][j] &&
                        e.race.temptation > 0,
                    );
                    break;
                  case target_type_enum.CharaId:
                    skill.aims[i][j] = [uma];
                    break;
                  case target_type_enum.ActivateHealSkill:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) =>
                        e !== uma &&
                        e.race.conditionParams.activate_count_heal > 0,
                    );
                    break;
                  default:
                    logger.debug(
                      `不支持的目标类型：${skill.data.name} 第${i + 1}段 效果${j + 1} ${skill.data.target_types[i][j]}`,
                    );
                }
              }
              simulate_ability_usage(skill, i, j, uma, list_in_race.length);
              switch (skill.data.ability_types[i][j]) {
                case ability_type_enum.HpRate:
                  skill.aims[i][j].forEach((e) => {
                    if (skill.values[i][j] > 0) {
                      e.race.conditionParams.activate_count_heal++;
                      e.flag.allowPlan = true;
                      list_in_race.forEach(
                        (other) =>
                          other !== uma &&
                          (other.race.conditionParams.is_other_character_activate_advantage_skill =
                            ability_type_enum.HpRate),
                      );
                    }
                    e.race.stamina += e.base.stamina * skill.values[i][j];
                  });
                  break;
                case ability_type_enum.TemptationEndTime:
                  skill.aims[i][j].forEach((e) => {
                    if (
                      (e.race.conditionParams.is_temptation = +(
                        skill.values[i][j] > 0
                      )) > 0
                    ) {
                      handle_temptation(uma, race_info);
                    } else {
                      uma.race.style = uma.style;
                      reset_loc_mind_other_diff(uma, race_info);
                    }
                    report_cache.at(-1).push({
                      e: e.race.conditionParams.is_temptation
                        ? e.race.temptation > 0
                          ? race_event_enum.temp_continue
                          : race_event_enum.temptation
                        : race_event_enum.temp_end,
                      u: uma,
                    });
                    e.race.temptation = skill.values[i][j] * frame_rate;
                  });
                  break;
                case ability_type_enum.CurrentSpeed:
                case ability_type_enum.CurrentSpeedWithNaturalDeceleration:
                  skill.aims[i][j].forEach((e) => {
                    e.race.velocityIdealBuff += skill.values[i][j];
                    e.race.velocityReal += skill.values[i][j];
                  });
                  break;
                case ability_type_enum.TargetSpeed:
                  skill.aims[i][j].forEach(
                    (e) => (e.race.velocityIdealBuff += skill.values[i][j]),
                  );
                  break;
                case ability_type_enum.Accel:
                  skill.aims[i][j].forEach((e) => {
                    if (skill.values[i][j] > 0) {
                      list_in_race.forEach(
                        (other) =>
                          other !== uma &&
                          (other.race.conditionParams.is_other_character_activate_advantage_skill =
                            ability_type_enum.Accel),
                      );
                    }
                    e.race.accelerationBuff += skill.values[i][j];
                  });
                  break;
                case ability_type_enum.ActivateRandomRareSkill:
                  uma.list_skill
                    .filter((s) => s !== skill)
                    .forEach((s) => {
                      for (let i = 0; i < 2; ++i) {
                        if (s.ability_time[i] <= 0) {
                          s.cooldown[i] = 0;
                        }
                      }
                    });
                  break;
                case ability_type_enum.VisibleDistance:
                  skill.aims[i][j].forEach(
                    (e) => (e.race.visible_dis += skill.values[i][j]),
                  );
                  break;
                case ability_type_enum.LaneMoveSpeed:
                  skill.aims[i][j].forEach(
                    (e) => (e.race.lane_move_buff += skill.values[i][j]),
                  );
                  break;
                case ability_type_enum.Genesis:
                case ability_type_enum.TargetLane:
                  break;
                case ability_type_enum.AccelFullSpeed:
                  skill.values[i][j] *= 0.1;
                  skill.aims[i][j].forEach(
                    (u) => (u.race.accel_full_speed_buff += skill.values[i][j]),
                  );
                  uma.race.conditionParams.run_at_full_speed_random = 2;
                  break;
                case ability_type_enum.ShareOrgasm:
                  skill.aims[i][j].forEach((e) =>
                    e.ero.main.forEach(
                      (p) => (e.ero.param[p] += skill.values[i][j]),
                    ),
                  );
                  break;
                default:
                  logger.debug(
                    `不支持的效果类型：${skill.data.name} 第${i + 1}段 效果${j + 1} ${skill.data.ability_types[i][j]}`,
                  );
              }
            }
          }
          buffer.skill.unshift(
            get_skill_record(uma, skill.data.id, params.timer_record, timer),
          );
          switch (uma.race.conditionParams.phase) {
            case 0:
              uma.race.conditionParams.activate_count_start++;
              break;
            case 1:
              uma.race.conditionParams.activate_count_middle++;
              break;
            case 2:
            case 3:
              uma.race.conditionParams.activate_count_end_after++;
          }
          if (uma.race.location >= race_info.span / 2) {
            uma.race.conditionParams.activate_count_later_half++;
          }
          uma.race.conditionParams.activate_count_all++;
          break;
        } else {
          skill.cooldown[i]--;
        }
      }
    });
    statistics.skill[uma.index_race].data.push(
      uma.race.conditionParams.activate_count_all,
    );
  });
}

module.exports = sub_simulate_skill;
/**
 * @param {RaceLane} lane
 * @param {number} slope
 */
module.exports.init = (lane, slope) => {
  top_lane = lane;
  top_slope = slope;
};
