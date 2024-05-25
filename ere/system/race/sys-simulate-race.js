const { sort_list } = require('#/utils/list-utils');

const RaceInfo = require('#/data/race/model/race-info');
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

  //记录每秒位置与技能发动状态 用于播放战报
  const record_location_list = [new Array(count_uma).fill(0)],
    record_acc_list = [new Array(count_uma).fill(0)],
    record_speed_list = [new Array(count_uma).fill(0)],
    // 起跑第一秒的技能报告
    record_skill_list = [new Array(count_uma).fill(undefined).map(() => [])];

  //计算出闸技能并赋予初始速度与加速度
  list_chara.forEach((uma) => {
    let start_delay = Math.random() * 0.1;
    let list_skill_start = uma.list_skill.filter(
      (itemSkill) =>
        itemSkill.skilldata.typeStartConst || itemSkill.skilldata.typeStartMod,
    );
    list_skill_start.forEach((skill) => {
      if (skill.skilldata.typeStartConst && Math.random() < uma.probs.skill) {
        start_delay = skill.skilldata.startDelayConst;
        record_skill_list[0][uma.index_race].push(skill.skilldata);
      }
    });
    list_skill_start.forEach((skill) => {
      if (skill.skilldata.typeStartMod && Math.random() < uma.probs.skill) {
        start_delay *= skill.skilldata.startDelayMod;
        record_skill_list[0][uma.index_race].push(skill.skilldata);
      }
    });
    record_speed_list[0][uma.index_race] = uma.race.velocityReal =
      startVelocity * (1 - start_delay);

    record_acc_list[0][uma.index_race] = uma.race.acceleration =
      startAcceleration;
  });

  const list_finished = [];
  let list_in_race = list_chara;

  while (flag_race) {
    //准备记录当前秒的战报
    record_acc_list.push(new Array(count_uma));
    record_location_list.push(new Array(count_uma));
    record_skill_list.push(new Array(count_uma).fill(undefined).map(() => []));
    record_speed_list.push(new Array(count_uma));

    //每秒先进行冲线判定 将高速相机列表置空
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
    });

    // 再无待计算马娘则比赛结束
    if (!list_in_race.length) {
      flag_race = false;
      continue;
    }

    //计算其余所有未完赛马娘的位置与速度
    list_in_race.forEach((uma) => {
      //先结算上一tick的速度至移动距离 以及上一tick的加速度至速度
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

      record_location_list.at(-1)[uma.index_race] = uma.race.location;
      record_acc_list.at(-1)[uma.index_race] = uma.race.acceleration;
      record_speed_list.at(-1)[uma.index_race] = uma.race.velocityReal;
    });

    //按位置sort一下以计算排名 顺便生成未完赛的短位置表继续计算
    (list_in_race = sort_list(list_in_race, (e) => e.race.location)).map(
      (e, i) => {
        e.rank.last = e.rank.curr;
        e.rank.curr = i + list_finished.length;
        return e.race.location;
      },
    );

    //通过位置表计算一下相对距离 之后红技光环应该也会用位置表读范围
    list_in_race.forEach((uma, i, l) => {
      uma.diff.ahead =
        i === 0 ? -1 : l[i - 1].race.location - uma.race.location;
      uma.diff.behind =
        i === l.length - 1 ? -1 : uma.race.location - l[i + 1].race.location;
      // 速度大于前一名马娘时获得准备超车状态
      uma.flag.overtake =
        i > 0 && uma.race.velocityReal > l[i - 1].race.velocityReal;
    });

    //模拟技能触发
    for (const itemUma of list_in_race) {
      // 读取本时刻脚下赛道状态
      const cur_lane = race_info.lanes.find(
        (e) =>
          itemUma.race.location >= e.start && itemUma.race.location < e.end,
      );
      itemUma.race.groundCurr = {
        slope:
          race_info.slopes.find(
            (e) =>
              itemUma.race.location >= e.start && itemUma.race.location < e.end,
          )?.slope || 0,
        isCurve: cur_lane?.is_curve || false,
        isLast: cur_lane?.is_last || false,
        phase: 0,
      };
      //读取赛程阶段 方法略有不同
      while (
        itemUma.race.location >= race_info.phases[itemUma.race.groundCurr.phase]
      ) {
        itemUma.race.groundCurr.phase++;
      }
      itemUma.race.groundCurr.phase--;

      //重置目标速度和加速度为赛段基础值
      itemUma.race.velocityIdeal =
        itemUma.base.velocityIdeal *
        itemUma.factorPhase.vStyle[itemUma.race.groundCurr.phase];
      itemUma.race.acceleration =
        itemUma.base.acceleration *
        itemUma.factorPhase.aStyle[itemUma.race.groundCurr.phase];

      //终盘时则再附加部分变动
      if (itemUma.race.groundCurr.phase === 2) {
        itemUma.race.velocityIdeal += itemUma.factorFinal.vIdealAdd;
        itemUma.race.staminaCost *= itemUma.factorFinal.sCostMult;
      }

      //每个赛段的随机浮动
      itemUma.race.velocityIdeal *=
        itemUma.factorPhase.vRand[itemUma.race.groundCurr.phase];

      //为自己计算最终冲刺方案
      if (itemUma.flag.allowPlan && itemUma.race.groundCurr.phase === 2) {
        //计算使用的终点位置在真正终点前60M
        let distLeft = race_info.span - 60 - itemUma.race.location;
        let planVelocity = itemUma.base.velocityMaxRush;
        let planStaminaCost =
          (20 / 144) *
          Math.pow(planVelocity - itemUma.base.velocityIdeal + 12, 2) *
          mod_stamina_cost_mess *
          itemUma.factorFinal.sCostMult;
        //体力足够以最大冲刺速度跑完则直接冲
        if (planStaminaCost * distLeft < itemUma.race.stamina * planVelocity) {
          itemUma.race.velocityPlanRush = planVelocity;
          itemUma.flag.finalRush = true;
        } else {
          //否则以每次降0.1冲刺速度为一版计划计算总耗时
          //先预测自己在终盘非冲刺下的情况
          let endSectVelocity =
            itemUma.base.velocityIdeal * itemUma.factorPhase.vStyle[2] +
            itemUma.factorFinal.vIdealAdd;
          let endSectStaminaCost =
            (20 / 144) *
            Math.pow(endSectVelocity - itemUma.base.velocityIdeal + 12, 2) *
            mod_stamina_cost_mess *
            itemUma.factorFinal.sCostMult;
          // 提出冲刺计划
          let listPlan = [];
          while (planVelocity > endSectVelocity) {
            // 预测冲刺计划的耐力消耗
            planStaminaCost =
              (20 / 144) *
              Math.pow(planVelocity - itemUma.base.velocityIdeal + 12, 2) *
              mod_stamina_cost_mess *
              itemUma.factorFinal.sCostMult;
            // 计算最合理的冲刺距离 以求刚好在终点用光耐力
            // ……理论上耐力够了就直接冲了不过这里
            let rushDistance =
              (planVelocity *
                (itemUma.race.stamina * endSectVelocity -
                  distLeft * endSectStaminaCost)) /
              (planStaminaCost * endSectStaminaCost -
                endSectVelocity * planVelocity);
            // 但如果耐力连非冲刺状态都不够的情况 需要兜底
            rushDistance = rushDistance < 0 ? 0 : rushDistance;
            let timeRush = Math.ceil(rushDistance / planStaminaCost);
            let rushLocation = race_info.span - 60 - timeRush * planVelocity;
            let timeNorm = Math.ceil(
              (rushLocation - itemUma.race.location) /
                itemUma.race.velocityIdeal,
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
            if (Math.random() < itemUma.probs.planRush) {
              itemUma.race.velocityPlanRush = itemPlan.velocity;
              itemUma.race.locationPlanRush = itemPlan.location;
              break;
            }
          }
        }
        itemUma.flagAllowPlan = false;
      }

      //判定进入冲刺状态
      if (
        !itemUma.flag.finalRush &&
        itemUma.race.location >= itemUma.planRushLocation
      ) {
        itemUma.flag.finalRush = true;
      }

      //若在冲刺状态则目标速度为冲刺速度
      if (itemUma.flag.finalRush) {
        itemUma.race.velocityIdeal = itemUma.race.velocityPlanRush;
      }

      //上坡减速
      if (itemUma.race.groundCurr.slope >= 0) {
        itemUma.flag.downhill = false;
        itemUma.race.velocityIdeal -=
          itemUma.race.groundCurr.slope * itemUma.factorSlope.up;
      } else {
        //下坡模式判定
        if (itemUma.flag.downhill && Math.random() < 0.2) {
          itemUma.flag.downhill = false;
        }
        if (
          !itemUma.flag.downhill &&
          Math.random() < itemUma.factorSlope.down
        ) {
          itemUma.flag.downhill = true;
        }
      }
      //下坡加速
      if (itemUma.flag.downhill) {
        itemUma.race.velocityIdeal += 0.3 - itemUma.race.groundCurr.slope * 10;
        itemUma.race.staminaCost *= 0.4;
      }

      //判定技能生效状态
      for (let itemSkill of itemUma.list_skill) {
        //未在触发状态的技能满足条件则触发
        if (
          /*

          TODO: 补加所有判定条件

          */
          !itemSkill.triggerFlag &&
          itemSkill.triggerCount < itemSkill.triggerMax &&
          itemUma.race.location >
            itemSkill.skilldata.triggerLeft * race_info.span &&
          itemUma.race.location <
            itemSkill.skilldata.triggerRight * race_info.span &&
          Math.random() < itemUma.probs.skill
        ) {
          itemSkill.triggerFlag = true;
          itemSkill.triggerTimeCount = 0;
          itemSkill.triggerCount++;
        }
        //已在触发状态的技能持续时间过去则结束
        if (
          itemSkill.triggerFlag &&
          itemSkill.triggerTimeCount >= itemSkill.triggerTimeMax
        ) {
          itemSkill.triggerFlag = false;
        }
      }
      //计算黄绿蓝技能效果
      for (let itemSkill of itemUma.list_skill) {
        if (itemSkill.skilldata.typeBuff && itemSkill.triggerFlag) {
          itemUma.race.velocityReal += itemSkill.skilldata.bonusVelocityReal;
          itemUma.race.velocityIdeal += itemSkill.skilldata.bonusVelocityIdeal;
          itemUma.race.acceleration += itemSkill.skilldata.bonusAcceleration;
          itemUma.race.stamina +=
            itemSkill.skilldata.bonusStamina * itemUma.base.stamina;
          itemSkill.triggerTimeCount++;

          if (itemSkill.skilldata.bonusStamina) {
            itemUma.flag.allowPlan = true;
          }

          record_skill_list
            .at(-1)
            [itemUma.index_race].push(itemSkill.skilldata);
        }
      }
    }

    // 计算红技时换成以index遍历
    list_in_race.forEach((uma, indUma) =>
      uma.list_skill.forEach((skill) => {
        if (skill.skilldata.typeDebuff && skill.triggerFlag) {
          skill.triggerTimeCount++;
          list_in_race.forEach((target, indTar) => {
            if (
              indTar !== indUma &&
              indTar >= indUma - skill.skilldata.rangeLeft &&
              indTar <= indUma + skill.skilldata.rangeRight
            ) {
              target.race.velocityReal -= skill.skilldata.debuffVelocityReal;
              target.race.velocityIdeal -= skill.skilldata.debuffVelocityIdeal;
              target.race.acceleration -= skill.skilldata.debuffAcceleration;
              target.race.stamina -=
                skill.skilldata.debuffStamina * target.base.stamina;
            }
          });
        }
      }),
    );

    //结算
    for (let itemUma of list_in_race) {
      //目标速度不会低于最低速度
      itemUma.race.velocityIdeal = Math.max(
        Math.min(itemUma.race.velocityIdeal, 30),
        itemUma.base.velocityMin,
      );
      //超速则不加速反而进行减速
      if (itemUma.race.velocityReal > itemUma.race.velocityIdeal) {
        itemUma.race.acceleration = raceDecel[itemUma.race.groundCurr.phase];
      }
      //扣耐不会成负数 回耐也不会超过初始上限
      itemUma.race.stamina = Math.min(
        Math.max(itemUma.race.stamina - itemUma.race.staminaCost, 0),
        itemUma.base.stamina,
      );
      //空耐则目标速度掉为最低速度
      if (itemUma.race.stamina <= 0) {
        itemUma.race.velocityIdeal = itemUma.base.velocityMin;
        itemUma.race.acceleration = raceDecel[4];
      }
    }
  }
  list_finished.forEach((e, i) => {
    e.rank.last = e.rank.curr;
    e.rank.curr = i + 1;
  });
  return {
    acc: record_acc_list,
    loc: record_location_list,
    skill: record_skill_list,
    speed: record_speed_list,
  };
}

module.exports = sys_sim_race;
