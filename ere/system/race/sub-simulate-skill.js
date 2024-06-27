const { logger } = require('#/era-electron');

const { sort_list } = require('#/utils/list-utils');

const {
  ability_type_enum,
  ability_usage_enum,
  target_type_enum,
} = require('#/data/race/model/uma-skill');
const {
  acc_up_hill_mode,
  frame_rate,
  race_event_enum,
} = require('#/data/race/race-sim-const');

/**
 * @param {number} timer
 * @returns {number}
 */
function add_time(timer) {
  const ret = timer + 0.066;
  if (0.990001 - (ret % 1) < 0.00001) {
    return Math.ceil(ret);
  }
  return ret;
}

/**
 * @param {PseudoUma} uma
 * @param {string} key
 * @param {number} phase
 */
function check_phase_random_loc(uma, key, phase) {
  const random_key = `${key}_random`;
  uma.race.conditionParams[random_key] = -1;
  if (uma.race.location >= uma.random[key][phase]) {
    if (uma.race.location <= uma.random[key][phase] + 10) {
      uma.race.conditionParams[random_key] = phase;
    } else {
      uma.random[key][phase] = 50000;
    }
  }
}

/**
 * @param {PseudoUma} uma
 * @param {string} key
 * @param {number} param_val
 */
function check_random_loc(uma, key, param_val) {
  const random_key = `${key}_random`;
  uma.race.conditionParams[random_key] = 0;
  if (uma.race.location >= uma.random[key]) {
    if (uma.race.location <= uma.random[key] + 10) {
      uma.race.conditionParams[random_key] = param_val;
    } else {
      uma.random[key] = 50000;
    }
  }
}

/**
 * @param {RaceLane} lane
 * @returns {string}
 */
function get_lane_name(lane) {
  return `${lane.is_last ? '终' : lane.index}${lane.is_curve ? '弯' : '直'}`;
}

/**
 * @param {PseudoUma[]} list_chara
 * @param {PseudoUma[]} list_in_race
 * @param {PseudoUma[]} list_finished
 * @param {RaceInfo} race_info
 * @param {number} timer
 * @param {RaceLane|undefined} has_final_corner
 * @param {number} mod_stamina_cost_mess
 * @param {number[][][]} record_events_list
 * @param {number[][][]} record_location_list
 * @param {number[][][]} record_skill_list
 */
function sub_simulate_skill(
  list_chara,
  list_in_race,
  list_finished,
  race_info,
  timer,
  has_final_corner,
  mod_stamina_cost_mess,
  record_events_list,
  record_location_list,
  record_skill_list,
) {
  const top_location = list_in_race[0].race.location,
    contestants_length = top_location - list_in_race.at(-1).race.location || 1,
    running_style_temptations = [0, 0, 0, 0];

  // 模拟技能触发
  list_in_race.forEach((uma, i, l) => {
    const cur_lane = race_info.lanes.find(
      (e) => uma.race.location >= e.start && uma.race.location < e.end,
    );
    uma.race.slope =
      race_info.slopes.find(
        (e) => uma.race.location >= e.start && uma.race.location < e.end,
      )?.slope || 0;
    record_location_list.at(-1)[uma.index_race] = [
      uma.race.location,
      get_lane_name(cur_lane),
      uma.race.slope,
    ];

    while (
      uma.race.conditionParams.phase < 3 &&
      uma.race.location >= race_info.phases[uma.race.conditionParams.phase]
    ) {
      uma.race.conditionParams.phase++;
    }
    if (uma.race.temptation > 0) {
      uma.race.temptation--;
      if (
        (uma.race.temptation % (3 * frame_rate) === 0 &&
          Math.random() < 0.55) ||
        !uma.race.temptation
      ) {
        record_events_list
          .at(-1)
          [uma.index_race].push(race_event_enum.temp_end);
        uma.race.temptation = 0;
        uma.race.conditionParams.is_temptation = 0;
      }
    } else if (
      uma.base.temptationSpan < race_info.span &&
      uma.race.location >= uma.base.temptationSpan
    ) {
      record_events_list
        .at(-1)
        [uma.index_race].push(race_event_enum.temptation);
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
        uma.race.conditionParams.infront_near_lane_time = add_time(
          uma.race.conditionParams.infront_near_lane_time,
        );
      }
      if (uma.race.conditionParams.blocked_front) {
        uma.race.conditionParams.blocked_front_continuetime =
          uma.race.conditionParams.blocked_side_continuetime = add_time(
            uma.race.conditionParams.blocked_side_continuetime,
          );
      }
      if (uma.race.conditionParams.bashin_diff_behind <= 1) {
        uma.race.conditionParams.behind_near_lane_time = add_time(
          uma.race.conditionParams.behind_near_lane_time,
        );
        uma.race.conditionParams.behind_near_lane_time_set1 = add_time(
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
    }
    uma.race.conditionParams.corner = cur_lane.corner;
    uma.race.conditionParams.distance_diff_rate =
      ((top_location - uma.race.location) * 100) / contestants_length;
    uma.race.conditionParams.distance_diff_top =
      top_location - uma.race.location;
    uma.race.conditionParams.distance_diff_top_float =
      uma.race.conditionParams.distance_diff_top * 10;
    uma.race.conditionParams.distance_rate =
      (uma.race.location * 100) / race_info.span;
    uma.race.conditionParams.hp_per =
      (uma.race.stamina * 100) / uma.base.stamina;
    uma.race.conditionParams.is_activate_any_skill = Number(
      uma.list_skill.findIndex(
        (e) => e.ability_time[0] > 0 || e.ability_time[1] > 0,
      ) !== -1,
    );
    uma.race.conditionParams.is_finalcorner = Number(
      has_final_corner && cur_lane.is_last,
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
      uma.race.overtakeAim !== undefined,
    );
    uma.race.conditionParams.near_count = 0;
    for (let k = i - 1; k >= 0; --k) {
      if (l[k].race.location - uma.race.location >= 3) {
        break;
      }
      uma.race.conditionParams.near_count++;
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
      if (order_rate < 50) {
        uma.race.conditionParams.order_rate_out50_continue = 0;
      }
      if (order_rate > 80) {
        uma.race.conditionParams.order_rate_in80_continue = 0;
      }
    }
    if (
      uma.race.overtakeAim &&
      uma.race.overtakeAim.rank.curr === uma.race.overtakeAim.rank.last
    ) {
      uma.race.conditionParams.overtake_target_no_order_up_time = add_time(
        uma.race.conditionParams.overtake_target_no_order_up_time,
      );
    } else {
      uma.race.conditionParams.overtake_target_no_order_up_time = 0;
    }
    if (uma.flag.to_be_overtaken) {
      uma.race.conditionParams.overtake_target_time = add_time(
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
      running_style_temptations[uma.style]++;
    }
  });

  list_in_race.forEach((uma, index, arr) => {
    uma.race.conditionParams.running_style_temptation_opponent_count_nige =
      running_style_temptations[0] -
      (uma.style === 0 && uma.race.temptation > 0);
    uma.race.conditionParams.running_style_temptation_opponent_count_senko =
      running_style_temptations[1] -
      (uma.style === 1 && uma.race.temptation > 0);
    uma.race.conditionParams.running_style_temptation_opponent_count_sashi =
      running_style_temptations[2] -
      (uma.style === 2 && uma.race.temptation > 0);
    uma.race.conditionParams.running_style_temptation_opponent_count_oikomi =
      running_style_temptations[3] -
      (uma.style === 3 && uma.race.temptation > 0);

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
        Math.pow(planVelocity - uma.base.velocityIdeal + 12, 2) *
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
        while (planVelocity > endSectVelocity) {
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
          planVelocity -= 0.1;
        }
        for (let itemPlan of sort_list(listPlan, (e) => e.time)) {
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
      record_events_list
        .at(-1)
        [uma.index_race].push(race_event_enum.final_push);
      uma.race.conditionParams.is_lastspurt = 1;
    }
    if (uma.race.conditionParams.is_lastspurt) {
      uma.race.velocityIdeal = uma.race.velocityPlanRush;
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
        uma.race.competeFightAim = undefined;
        uma.race.competeFightTimer = 0;
      } else {
        uma.race.competeFightTimer = add_time(uma.race.competeFightAim);
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
        record_events_list
          .at(-1)
          [uma.index_race].push(race_event_enum.compete_fight);
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
    } else {
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
                  skill.aims[i][j] = [uma];
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
          skill.data.conditions[i](uma.race.conditionParams)
        ) {
          uma.race.conditionParams.is_activate_any_skill = 1;
          skill.count[i]++;
          skill.cooldown[i] =
            (skill.data.cooldown_times[i] * frame_rate * race_info.span) / 1000;
          if (uma.chara === -1) {
            skill.cooldown[i] = Math.floor(skill.cooldown[i] * 0.99);
          }
          if (!skill.data.is_two_phase) {
            skill.cooldown[1 - i] = skill.cooldown[i];
          }
          skill.ability_time[i] =
            (skill.data.ability_times[i] * frame_rate * race_info.span) / 1000;
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
                  case target_type_enum.Visible:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) =>
                        e !== uma &&
                        Math.abs(e.race.location - uma.race.location) <
                          uma.race.visible_dis,
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
                    break;
                  case target_type_enum.SelfBehind:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) => e.race.location < uma.race.location,
                    );
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
                    break;
                  case target_type_enum.SelfBehindTemptation:
                    skill.aims[i][j] = list_in_race.filter(
                      (e) =>
                        e.race.location < uma.race.location &&
                        e.race.temptation > 0,
                    );
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
              switch (skill.data.ability_value_usages[i][j]) {
                case ability_usage_enum.MultiplySkillNum:
                  skill.values[i][j] =
                    skill.data.ability_values[i][j] *
                    Math.min(
                      1 + uma.race.conditionParams.activate_count_all * 0.01,
                      1.2,
                    );
                  break;
                case ability_usage_enum.MultiplyRandom1:
                  skill.values[i][j] = Math.random();
                  if (skill.values[i][j] < 0.1) {
                    skill.values[i][j] = 0.04;
                  } else if (skill.values[i][j] < 0.4) {
                    skill.values[i][j] = 0.02;
                  } else {
                    skill.values[i][j] = 0;
                  }
                  skill.values[i][j] *= skill.data.ability_values[i][j];
                  break;
                case ability_usage_enum.MultiplyFanCount:
                case ability_usage_enum.MultiplySingleModeWinCount:
                  if (uma.base.winCount < 6) {
                    skill.values[i][j] = skill.data.ability_values[i][j] * 0.8;
                  } else if (uma.base.winCount < 14) {
                    skill.values[i][j] = skill.data.ability_values[i][j] * 0.9;
                  } else if (uma.base.winCount < 18) {
                    skill.values[i][j] = skill.data.ability_values[i][j];
                  } else if (uma.base.winCount < 25) {
                    skill.values[i][j] = skill.data.ability_values[i][j] * 1.1;
                  } else if (uma.base.winCount >= 25) {
                    skill.values[i][j] = skill.data.ability_values[i][j] * 1.2;
                  }
                  break;
                case ability_usage_enum.MultiplyOvertakeCount:
                  skill.values[i][j] =
                    skill.data.ability_values[i][j] +
                    0.02 * uma.base.change_order_finalcorner;
                  break;
                case ability_usage_enum.MultiplyActivateSpecificTagSkillCount:
                  if (uma.base.greenCount >= 6) {
                    skill.values[i][j] = skill.data.ability_values[i][j] + 3;
                  } else if (uma.base.greenCount >= 5) {
                    skill.values[i][j] = skill.data.ability_values[i][j] + 2;
                  } else if (uma.base.greenCount >= 3) {
                    skill.values[i][j] = skill.data.ability_values[i][j] + 1;
                  } else {
                    skill.values[i][j] = skill.data.ability_values[i][j];
                  }
                  break;
                case ability_usage_enum.AddDistanceDiffTop:
                  if (uma.race.conditionParams.distance_diff_top >= 20) {
                    skill.values[i][j] = skill.data.ability_values[i][j] + 0.1;
                  } else {
                    skill.values[i][j] = skill.data.ability_values[i][j];
                  }
                  break;
                case ability_usage_enum.MultiplyBlockedSideMaxContinueTimePhaseMiddleRun1:
                  skill.values[i][j] =
                    skill.data.ability_values[i][j] *
                    Math.min(
                      uma.race.conditionParams.activate_count_all * 0.01,
                      0.15,
                    );
                  break;
                case ability_usage_enum.MultiplyBaseSpeed:
                  skill.values[i][j] =
                    skill.data.ability_values[i][j] + uma.base.accBuffFromWiz;
                  break;
                case ability_usage_enum.Direct:
                case ability_usage_enum.Unknown:
                  skill.values[i][j] = skill.data.ability_values[i][j];
                  break;
                case ability_usage_enum.MultiplyTeamTotalSpeed:
                case ability_usage_enum.MultiplyTeamTotalStamina:
                case ability_usage_enum.MultiplyTeamTotalPower:
                case ability_usage_enum.MultiplyTeamTotalGuts:
                case ability_usage_enum.MultiplyTeamTotalWiz:
                  temp =
                    uma.base.total_attrs[
                      skill.data.ability_value_usages[i][j] -
                        ability_usage_enum.MultiplyTeamTotalSpeed
                    ];
                  if (temp >= 3600) {
                    temp = 2;
                  } else if (temp >= 2600) {
                    temp = 17.5;
                  } else if (temp >= 1800) {
                    temp = 15;
                  } else if (temp >= 1200) {
                    temp = 12.5;
                  } else {
                    temp = 1;
                  }
                  skill.values[i][j] = temp * skill.data.ability_values[i][j];
                  break;
                default:
                  skill.values[i][j] = skill.data.ability_values[i][j];
                  logger.debug(
                    `不支持的增幅类型：${skill.data.name} 第${i + 1}段 效果${j + 1} ${skill.data.ability_types[i][j]}`,
                  );
              }
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
                    e.race.temptation = skill.values[i][j] * frame_rate;
                    e.race.conditionParams.is_temptation = Number(
                      skill.values[i][j] > 0,
                    );
                    record_events_list
                      .at(-1)
                      [
                        e.index_race
                      ].push(e.race.conditionParams.is_temptation ? (e.race.temptation > 0 ? race_event_enum.temp_continue : race_event_enum.temptation) : race_event_enum.temp_end);
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
                case ability_type_enum.TargetLane:
                  break;
                default:
                  logger.debug(
                    `不支持的效果类型：${skill.data.name} 第${i + 1}段 效果${j + 1} ${skill.data.ability_types[i][j]}`,
                  );
              }
            }
          }
          record_skill_list.at(-1)[uma.index_race].push(skill.data.id);
          if (!skill.ability_time[i]) {
            skill.aims[i] = [];
            skill.values[i] = [];
          }
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
          break;
        } else {
          skill.cooldown[i]--;
        }
      }
    });
  });
}

module.exports = sub_simulate_skill;
module.exports.add_time = add_time;
module.exports.get_lane_name = get_lane_name;
