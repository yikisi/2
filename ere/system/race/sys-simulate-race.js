const { sort_list } = require('#/utils/list-utils');

const RaceInfo = require('#/data/race/model/race-info');
const {
  ability_type_enum,
  target_type_enum,
} = require('#/data/race/model/uma-skill');
const {
  mod_stamina_cost_mess_dirt,
  mod_stamina_cost_mess_grass,
  raceDecel,
} = require('#/data/race/race-const.json');

//起跑速度=3 加速度=24
const startVelocity = 3;
const startAcceleration = 24;

//上坡时基础加速度为三分之二
// const raceAcceModUphill = 2 / 3;

function add_time(timer) {
  const ret = timer + 0.066;
  if (0.990001 - (ret % 1) < 0.00001) {
    return Math.ceil(ret);
  }
  return ret;
}

/**
 * @param {PseudoUma[]} list_chara
 * @param {RaceInfo} race_info
 */
function sys_sim_race(list_chara, race_info) {
  const count_uma = list_chara.length;
  const mod_stamina_cost_mess =
    race_info.ground === RaceInfo.ground_enum.grass
      ? mod_stamina_cost_mess_grass[race_info.mess]
      : mod_stamina_cost_mess_dirt[race_info.mess];

  let flag_race = true;
  const phase_size = race_info.span / 4;

  //记录每秒位置与技能发动状态 用于播放战报
  const record_location_list = [new Array(count_uma).fill(0)],
    record_acc_list = [new Array(count_uma).fill(0)],
    record_speed_list = [new Array(count_uma).fill(0)],
    // 起跑第一秒的技能报告
    record_skill_list = [new Array(count_uma).fill(undefined).map(() => [])],
    record_stamina_list = [new Array(count_uma)],
    start_delay = new Array(count_uma).fill(0);

  // 装填preConditionParams与conditionParams，计算出闸技能并赋予初始速度与加速度
  list_chara.forEach((uma) => {
    record_stamina_list[0][uma.index_race] = uma.race.stamina;

    uma.race.conditionParams.accumulatetime = 0;
    uma.race.conditionParams.activate_count_all = 0;
    uma.race.conditionParams.activate_count_end_after = 0;
    uma.race.conditionParams.activate_count_heal = 0;
    uma.race.conditionParams.activate_count_middle = 0;
    uma.race.conditionParams.activate_count_start = 0;
    uma.race.preConditionParams.behind_near_lane_time_set1 = 0;
    uma.race.preConditionParams.blocked_side_continuetime =
      uma.race.conditionParams.blocked_side_continuetime = 0;
    uma.race.preConditionParams.change_order_up_middle = 0;
    uma.race.preConditionParams.order_rate_in20_continue =
      uma.race.conditionParams.order_rate_in20_continue = 1;
    uma.race.conditionParams.order_rate_in50_continue = 1;
    uma.race.conditionParams.order_rate_in80_continue = 1;
    uma.race.preConditionParams.order_rate_out20_continue = 1;
    uma.race.preConditionParams.order_rate_out40_continue =
      uma.race.conditionParams.order_rate_out40_continue = 1;
    uma.race.preConditionParams.order_rate_out50_continue = 1;
    uma.race.preConditionParams.order_rate_out70_continue = 1;

    start_delay[uma.index_race] = Math.random() * 0.1;
    uma.list_skill = uma.list_skill.filter((s) => {
      if (s.data.ability_types[0] !== ability_type_enum.StartDash) {
        return true;
      }
      start_delay[uma.index_race] *= s.data.ability_values[0];
      record_skill_list[0][uma.index_race].push(s.data.id);
    });

    if (start_delay[uma.index_race] < 1 / 15) {
      record_acc_list[0][uma.index_race] = uma.race.acceleration =
        startAcceleration;
      record_speed_list[0][uma.index_race] = uma.race.velocityReal =
        startVelocity;
    }
    uma.race.conditionParams.is_badstart = Number(
      start_delay[uma.index_race] >= 0.8,
    );
  });

  const list_finished = [];
  let list_in_race = list_chara,
    flag = true,
    timer = 0;

  while (flag_race) {
    timer = add_time(timer);
    // 准备记录当前秒的战报
    record_acc_list.push(new Array(count_uma));
    record_location_list.push(new Array(count_uma));
    record_skill_list.push(new Array(count_uma).fill(undefined).map(() => []));
    record_speed_list.push(new Array(count_uma));
    record_stamina_list.push(new Array(count_uma));

    // 每秒先进行冲线判定 将高速相机列表置空
    const list_msec_cam = [];

    list_in_race = list_in_race.filter((e) => {
      e.flagFinish = !e.flagFinish && e.race.location >= race_info.span;
      if (e.flagFinish) {
        list_msec_cam.push(e);
      }
      return !e.flagFinish;
    });

    list_finished.push(...sort_list(list_msec_cam, (e) => e.race.location));
    list_finished.forEach((e) => {
      record_location_list.at(-1)[e.index_race] =
        race_info.span + 1000 * (race_info.gates - e.rank.curr + 1);
      record_acc_list.at(-1)[e.index_race] = record_speed_list.at(-1)[
        e.index_race
      ] = 0;
      record_stamina_list.at(-1)[e.index_race] = e.race.stamina;
    });

    // 再无待计算马娘则比赛结束
    if (!list_in_race.length) {
      flag_race = false;
      continue;
    }

    // 计算其余所有未完赛马娘的位置与速度
    list_in_race.forEach((uma) => {
      // 先结算上一tick的速度至移动距离 以及上一tick的加速度至速度
      if (start_delay[uma.index_race]) {
        if (start_delay[uma.index_race] < 1 / 15) {
          uma.race.location +=
            startVelocity +
            uma.race.acceleration * (1 - start_delay[uma.index_race]);
          uma.race.staminaCost =
            ((20 / 144) *
              Math.pow(uma.race.velocityReal - uma.race.location, 2) *
              mod_stamina_cost_mess) /
            15;
        }
        uma.race.velocityReal = uma.base.velocityMin;
        start_delay[uma.index_race] = 0;
      } else {
        const temp = uma.race.velocityReal;
        uma.race.velocityReal = Math.max(
          uma.race.velocityReal + uma.race.acceleration / 15,
          uma.base.velocityMin,
        );
        uma.race.location += (uma.race.velocityReal + temp) / 30;
        uma.race.staminaCost =
          ((20 / 144) *
            Math.pow(uma.race.velocityReal - uma.base.velocityIdeal + 12, 2) *
            mod_stamina_cost_mess) /
          15;
      }

      record_location_list.at(-1)[uma.index_race] = uma.race.location;
      record_acc_list.at(-1)[uma.index_race] = uma.race.acceleration;
      record_speed_list.at(-1)[uma.index_race] = uma.race.velocityReal;
      record_stamina_list.at(-1)[uma.index_race] = uma.race.stamina;
    });

    // 按位置sort一下以计算排名 顺便生成未完赛的短位置表继续计算
    list_in_race = sort_list(list_in_race, (e) => e.race.location);

    //通过位置表计算一下相对距离 之后红技光环应该也会用位置表读范围
    list_in_race.forEach((uma, i, l) => {
      uma.rank.last = uma.rank.curr;
      uma.rank.curr = list_finished.length + i + 1;
      uma.race.preConditionParams.bashin_diff_infront =
        uma.race.conditionParams.bashin_diff_infront =
          (i === 0 ? 50 : l[i - 1].race.location - uma.race.location) / 2.5;
      uma.race.preConditionParams.bashin_diff_behind =
        uma.race.conditionParams.bashin_diff_behind =
          (i === l.length - 1
            ? 50
            : uma.race.location - l[i + 1].race.location) / 2.5;

      // 速度大于前一名马娘时获得准备超车状态
      uma.flag.overtake =
        i > 0 && uma.race.velocityReal > l[i - 1].race.velocityReal;
    });

    const top_location =
        list_finished.length > 0 ||
        list_in_race[0].race.location >= race_info.span
          ? race_info.span
          : list_in_race[0].race.location,
      contestants_length = top_location - list_in_race.at(-1).race.location;

    //模拟技能触发
    list_in_race.forEach((uma) => {
      if (uma.race.location >= race_info.span) {
        return;
      }
      // 读取本时刻脚下赛道状态
      const cur_lane = race_info.lanes.find(
        (e) => uma.race.location >= e.start && uma.race.location < e.end,
      );
      let phase = Math.floor(uma.race.location / phase_size);

      uma.race.conditionParams.accumulatetime = timer;
      uma.race.preConditionParams.change_order_onetime = 0;
      if (phase === 1 && uma.rank.curr < uma.rank.last) {
        uma.race.preConditionParams.change_order_up_middle++;
      }
      uma.race.preConditionParams.corner = uma.race.conditionParams.corner =
        cur_lane.corner;
      uma.race.preConditionParams.distance_diff_rate =
        uma.race.conditionParams.distance_diff_rate =
          (top_location - uma.race.location) / contestants_length;
      uma.race.preConditionParams.distance_diff_top =
        uma.race.conditionParams.distance_diff_top =
          (top_location - uma.race.location) / 2.5;
      uma.race.preConditionParams.distance_rate =
        uma.race.conditionParams.distance_rate =
          uma.race.location / race_info.span;
      uma.race.preConditionParams.is_finalcorner =
        uma.race.conditionParams.is_finalcorner = Number(
          cur_lane.corner > 0 && cur_lane.is_last,
        );
      uma.race.conditionParams.is_last_straight = Number(
        cur_lane.corner === 0 && cur_lane.is_last,
      );
      uma.race.preConditionParams.order = uma.race.conditionParams.order =
        uma.rank.curr;
      const order_rate =
        (uma.race.preConditionParams.order_rate =
        uma.race.conditionParams.order_rate =
          (uma.rank.curr * 100) / list_chara.length);
      if (phase === 0 && timer > 15 * 5) {
        if (order_rate > 20) {
          uma.race.preConditionParams.order_rate_in20_continue =
            uma.race.conditionParams.order_rate_in20_continue = 0;
        } else if (order_rate < 20) {
          uma.race.preConditionParams.order_rate_out20_continue = 0;
        }
        if (order_rate < 40) {
          uma.race.preConditionParams.order_rate_out40_continue =
            uma.race.conditionParams.order_rate_out40_continue = 0;
        }
        if (order_rate > 50) {
          uma.race.conditionParams.order_rate_in50_continue = 0;
        } else if (order_rate < 50) {
          uma.race.preConditionParams.order_rate_out50_continue = 0;
        }
        if (order_rate < 70) {
          uma.race.preConditionParams.order_rate_out70_continue = 0;
        }
        if (order_rate > 80) {
          uma.race.conditionParams.order_rate_in80_continue = 0;
        }
      }
      uma.race.preConditionParams.phase = uma.race.conditionParams.phase =
        phase;
      uma.race.preConditionParams.remain_distance =
        uma.race.conditionParams.remain_distance =
          race_info.span - uma.race.location;
      uma.race.preConditionParams.slope = uma.race.conditionParams.slope =
        race_info.slopes.find(
          (e) => uma.race.location >= e.start && uma.race.location < e.end,
        )?.slope || 0;
      uma.race.phase = phase = Math.min(phase, 2);

      //重置目标速度和加速度为赛段基础值
      uma.race.velocityIdeal =
        uma.base.velocityIdeal * uma.factorPhase.vStyle[phase];
      uma.race.acceleration =
        uma.base.acceleration * uma.factorPhase.aStyle[phase];

      //终盘时则再附加部分变动
      if (phase === 2) {
        uma.race.velocityIdeal += uma.factorFinal.vIdealAdd;
        uma.race.staminaCost *= uma.factorFinal.sCostMult;
      }

      //每个赛段的随机浮动
      uma.race.velocityIdeal *= uma.factorPhase.vRand[phase];

      //为自己计算最终冲刺方案
      if (uma.flag.allowPlan && phase === 2) {
        //计算使用的终点位置在真正终点前60M
        let distLeft = race_info.span - 60 - uma.race.location;
        let planVelocity = uma.base.velocityMaxRush;
        let planStaminaCost =
          (20 / 144) *
          Math.pow(planVelocity - uma.base.velocityIdeal + 12, 2) *
          mod_stamina_cost_mess *
          uma.factorFinal.sCostMult;
        //体力足够以最大冲刺速度跑完则直接冲
        if (planStaminaCost * distLeft < uma.race.stamina * planVelocity) {
          uma.race.velocityPlanRush = planVelocity;
          uma.flag.finalRush = true;
        } else {
          //否则以每次降0.1冲刺速度为一版计划计算总耗时
          //先预测自己在终盘非冲刺下的情况
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
            // 计算最合理的冲刺距离 以求刚好在终点用光耐力
            // ……理论上耐力够了就直接冲了不过这里
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
            //记录计划冲刺速度 所用时间 及开始位置
            let itemPlan = {
              velocity: planVelocity,
              time: timeRush + timeNorm,
              location: rushLocation,
            };
            listPlan.push(itemPlan);
            planVelocity -= 0.1;
          }
          listPlan.sort((a, b) => a.time - b.time);
          for (let itemPlan of listPlan) {
            if (Math.random() < uma.probs.planRush) {
              uma.race.velocityPlanRush = itemPlan.velocity;
              uma.race.locationPlanRush = itemPlan.location;
              break;
            }
          }
        }
        uma.flagAllowPlan = false;
      }

      // 判定进入冲刺状态
      if (
        !uma.flag.finalRush &&
        uma.race.location >= uma.race.locationPlanRush
      ) {
        uma.flag.finalRush = true;
      }

      //若在冲刺状态则目标速度为冲刺速度
      if (uma.flag.finalRush) {
        uma.race.velocityIdeal = uma.race.velocityPlanRush;
      }

      //上坡减速
      if (uma.race.conditionParams.slope >= 0) {
        uma.flag.downhill = false;
        uma.race.velocityIdeal -=
          uma.race.conditionParams.slope * uma.factorSlope.up;
      } else {
        // 下坡模式判定
        if (uma.flag.downhill && Math.random() < 0.2) {
          uma.flag.downhill = false;
        }
        if (!uma.flag.downhill && Math.random() < uma.factorSlope.down) {
          uma.flag.downhill = true;
        }
      }
      //下坡加速
      if (uma.flag.downhill) {
        uma.race.velocityIdeal += 0.3 - uma.race.conditionParams.slope * 10;
        uma.race.staminaCost *= 0.4;
      }

      //判定技能生效状态
      uma.list_skill.forEach((skill) => {
        for (let i = 0; i < 2; ++i) {
          if (skill.ability_time[i] > 0) {
            skill.ability_time[i]--;
            if (skill.ability_time[i] <= 0) {
              skill.ability_time[i] = 0;
              // 效果结束
              // TODO 非自然衰减即时速度马上把速度减下来
            }
          }
          skill.precondition[i] ||= skill.data.preconditions[i](
            uma.race.preConditionParams,
          );
          if (
            !skill.ability_time[0] &&
            skill.cooldown[i] <= 0 &&
            skill.data.cooldown_times[i] > 0 &&
            skill.precondition[i] &&
            skill.data.conditions[i](uma.race.conditionParams)
          ) {
            skill.count[i]++;
            skill.cooldown[i] = skill.data.cooldown_times[i] * 15;
            skill.ability_time[i] = skill.data.ability_times[i] * 15;
            for (let j = 0; j < skill.data.ability_types[i]; ++j) {
              if (skill.data.ability_types[i][j] === 0) {
                continue;
              }
              let aims = [],
                temp;
              switch (skill.data.target_types[i][j]) {
                case target_type_enum.Self:
                  aims = [uma];
                  break;
                case target_type_enum.Visible:
                  aims = list_in_race.filter(
                    (e) => e.race.location < race_info.span,
                  );
                  break;
                case target_type_enum.OrderInfront:
                  temp =
                    list_finished.length +
                    list_in_race.filter((e) => e.race.location < race_info.span)
                      .length;
                  if (
                    list_finished.length +
                      list_in_race.filter(
                        (e) => e.race.location < race_info.span,
                      ).length <
                    skill.data.target_values[i][j]
                  ) {
                    aims = list_in_race.slice(
                      0,
                      skill.data.target_values[i][j] - temp,
                    );
                  }
                  break;
                case target_type_enum.SelfInfront:
                  aims = list_in_race.filter(
                    (e) =>
                      e.race.location < race_info.span &&
                      e.race.location > uma.race.location &&
                      e !== uma,
                  );
                  break;
                case target_type_enum.SelfBehind:
                  aims = list_in_race.filter(
                    (e) => e.race.location < uma.race.location && e !== uma,
                  );
                  break;
                case target_type_enum.RunningStyleOtherSelf:
                  aims = list_in_race.filter(
                    (e) =>
                      e.race.location < race_info.span &&
                      uma.style + 1 === skill.data.target_values[i][j],
                  );
                  break;
                case target_type_enum.SelfInfrontTemptation:
                  aims = list_in_race.filter(
                    (e) =>
                      e.race.location < race_info.span &&
                      e.race.location > uma.race.location &&
                      e.flag.temptation &&
                      e !== uma,
                  );
                  break;
                case target_type_enum.SelfBehindTemptation:
                  aims = list_in_race.filter(
                    (e) =>
                      e.race.location < uma.race.location &&
                      e.flag.temptation &&
                      e !== uma,
                  );
                  break;
                case target_type_enum.RunningStyleTemptationOtherSelf:
                  aims = list_in_race.filter(
                    (e) =>
                      e.race.location < race_info.span &&
                      uma.style + 1 === skill.data.target_values[i][j] &&
                      e.flag.temptation,
                  );
                  break;
                case target_type_enum.CharaId:
                  aims = [uma];
                  break;
                case target_type_enum.ActivateHealSkill:
                  aims = list_in_race.filter(
                    (e) => e.race.location < race_info.span && e.flag.heal,
                  );
              }
              let value_buff = 1;
              // 看得头疼，暂时不做
              // switch (skill.data.ability_value_usages[i][j]) {
              //   case ability_type_usage_enum.MultiplyRandom1:
              //     value_buff = get_random_value(0.8, 1.2, true);
              //     break;
              //   case ability_type_usage_enum.Direct:
              //   case ability_type_usage_enum.MultiplyTeamTotalSpeed:
              //   case ability_type_usage_enum.MultiplyTeamTotalStamina:
              //   case ability_type_usage_enum.MultiplyTeamTotalPower:
              //   case ability_type_usage_enum.MultiplyTeamTotalGuts:
              //   case ability_type_usage_enum.MultiplyTeamTotalWiz:
              //   case ability_type_usage_enum.MultiplyFanCount:
              //   default:
              //     value_buff = 1;
              //     break;
              // }
              switch (skill.data.ability_types[i][j]) {
                // case ability_type_enum.VisibleDistance:
                case ability_type_enum.HpRate:
                case ability_type_enum.TemptationEndTime:
                case ability_type_enum.CurrentSpeed:
                case ability_type_enum.CurrentSpeedWithNaturalDeceleration:
                  break;
                case ability_type_enum.TargetSpeed:
                  aims.forEach(
                    (e) =>
                      (e.race.velocityIdeal +=
                        skill.data.ability_values[i][j] * value_buff),
                  );
                  break;
                // case ability_type_enum.LaneMoveSpeed:
                case ability_type_enum.Accel:
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
              }
            }
            record_skill_list.at(-1)[uma.index_race].push(skill.data.id);
          } else {
            skill.cooldown[i]--;
          }
        }
      });
    });

    //结算
    for (const uma of list_in_race) {
      if (uma.race.location >= race_info.span) {
        continue;
      }
      //目标速度不会低于最低速度
      uma.race.velocityIdeal = Math.max(
        Math.min(uma.race.velocityIdeal, 30),
        uma.base.velocityMin,
      );
      //超速则不加速反而进行减速
      if (uma.race.velocityReal > uma.race.velocityIdeal) {
        uma.race.acceleration = raceDecel[uma.race.phase];
      }
      //扣耐不会成负数 回耐也不会超过初始上限
      uma.race.stamina = Math.min(
        Math.max(uma.race.stamina - uma.race.staminaCost, 0),
        uma.base.stamina,
      );
      //空耐则目标速度掉为最低速度
      if (uma.race.stamina === 0) {
        uma.race.velocityIdeal = uma.base.velocityMin;
        uma.race.acceleration = raceDecel[4];
      }
    }
    if (flag) {
      flag = false;
      console.log(
        Object.entries(list_chara[0].race.preConditionParams)
          .filter((e) => e[1] !== undefined)
          .map((e) => e[0]),
        Object.entries(list_chara[0].race.conditionParams)
          .filter((e) => e[1] !== undefined)
          .map((e) => e[0]),
      );
    }
  }
  console.log(record_skill_list.filter((r) => r[0].length > 0));
  list_finished.forEach((e, i) => {
    e.rank.last = e.rank.curr;
    e.rank.curr = i + 1;
  });
  return {
    acc: record_acc_list,
    loc: record_location_list,
    skill: record_skill_list,
    speed: record_speed_list,
    stamina: record_stamina_list,
  };
}

module.exports = sys_sim_race;
