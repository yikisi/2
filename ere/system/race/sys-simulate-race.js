// const era = require('#/era-electron');

//起跑速度=3 加速度=24
const startVelocity = 3;
// const startAcceleration = 24;

//上坡时基础加速度为三分之二
// const raceAcceModUphill = 2 / 3;

const RaceInfo = require('#/data/race/model/race-info');
const {
  mod_stamina_cost_mess_dirt,
  mod_stamina_cost_mess_grass,
  raceDecel,
} = require('#/data/race/race-const.json');

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

  let list_finished = [];
  let list_msec_cam = [];

  //记录每秒位置与技能发动状态 用于播放战报
  let record_location_list = [];
  let record_skill_list = [];

  let record_location_sec = new Array(count_uma).fill(0);
  record_location_list.push(record_location_sec);

  let record_skill_sec = new Array(count_uma).fill([]);

  //计算出闸技能并赋予初始速度与加速度
  for (let itemUma of list_chara) {
    let start_delay = Math.random() * 0.1;
    let list_skill_start = itemUma.list_skill.filter(
      (itemSkill) =>
        itemSkill.skilldata.typeStartConst || itemSkill.skilldata.typeStartMod,
    );
    for (let itemSkill of list_skill_start) {
      if (
        itemSkill.skilldata.typeStartConst &&
        Math.random() < itemUma.probs.skill
      ) {
        start_delay = itemSkill.skilldata.startDelayConst;
        record_skill_sec[itemUma.index_race - 1].push(itemSkill.skilldata);
      }
    }
    for (let itemSkill of list_skill_start) {
      if (
        itemSkill.skilldata.typeStartMod &&
        Math.random < itemUma.probs.skill
      ) {
        start_delay *= itemSkill.skilldata.startDelayMod;
        record_skill_sec[itemUma.index_race - 1].push(itemSkill.skilldata);
      }
    }
    itemUma.race.velocityReal = startVelocity * (1 - start_delay);
    itemUma.race.acceleration =
      0.85 * itemUma.base.velocityIdeal - itemUma.race.velocityReal;
  }

  //起跑第一秒的技能报告
  record_skill_list.push(record_skill_sec);

  while (flag_race) {
    //准备记录当前秒的战报
    record_location_sec.fill(0);
    record_skill_sec.fill([]);

    //每秒先进行冲线判定 将高速相机列表置空
    list_msec_cam = [];

    //将所有未完成比赛且在此刻冲线的马娘录入高速相机列表
    for (let itemUma of list_chara) {
      if (!itemUma.flagFinish && itemUma.race.location > race_info.span) {
        itemUma.flagFinish = true;
        list_msec_cam.push(itemUma);
      }
    }

    //每次筛出高速相机列表中位置最靠前的马娘并加入完赛列表
    while (list_msec_cam.length) {
      let cam_rank = list_finished.length + 1;
      let cam_chara = list_msec_cam.reduce(
        (prev, curr) => (prev.race.location > curr.race.location ? prev : curr),
        null,
      );
      cam_chara.rank.race = cam_rank;
      list_finished.push(cam_chara);
      //同时再移出比赛列表以减少循环嵌套
      list_msec_cam.splice(list_msec_cam.indexOf(cam_chara), 1);
      list_chara.splice(list_chara.indexOf(cam_chara), 1);
    }

    //完赛马娘的当前位置记录
    for (let itemUma of list_finished) {
      record_location_sec[itemUma.index_race - 1] = race_info.span;
    }

    //再无待计算马娘则比赛结束
    if (!list_chara) {
      flag_race = false;
      record_location_list.push(record_location_sec);
      continue;
    }

    //计算其余所有未完赛马娘的位置与速度
    for (let itemUma of list_chara) {
      //先结算上一tick的速度至移动距离 以及上一tick的加速度至速度
      itemUma.race.location += itemUma.race.velocityReal;
      itemUma.race.velocityReal += itemUma.race.acceleration;
      itemUma.race.staminaCost =
        (20 / 144) *
        Math.pow(
          itemUma.race.velocityReal - itemUma.base.velocityIdeal + 12,
          2,
        ) *
        mod_stamina_cost_mess;

      record_location_sec[itemUma.index_race - 1] = itemUma.race.location;
    }

    //更新战报总位置表
    record_location_list.push(record_location_sec);

    //按位置sort一下以计算排名 顺便生成未完赛的短位置表继续计算
    let list_location = [];
    list_chara.sort((a, b) => b.race.location - a.race.location);
    let tmpRank = list_finished.length;
    for (let itemUma of list_chara) {
      itemUma.rank.last = itemUma.rank.curr;
      itemUma.rank.curr = tmpRank++;
      list_location.push(itemUma.race.location);
    }

    //通过位置表计算一下相对距离 之后红技光环应该也会用位置表读范围
    for (let indUma in list_chara) {
      list_chara[indUma].diff.ahead =
        indUma === 0
          ? -1
          : list_chara[indUma - 1].race.location -
            list_chara[indUma].race.location;
      list_chara[indUma].diff.behind =
        indUma === list_location.length
          ? -1
          : list_chara[indUma].race.location -
            list_chara[indUma + 1].race.location;
      //速度大于前一名马娘时获得准备超车状态
      list_chara[indUma].flag.overtake =
        !indUma &&
        list_chara[indUma].race.velocityReal >
          list_chara[indUma - 1].race.velocityReal;
    }

    //模拟技能触发
    for (let itemUma of list_chara) {
      //读取本时刻脚下赛道状态
      itemUma.race.groundCurr = {
        slope: 0,
        isCurve: false,
        isLast: false,
        phase: 0,
      };
      //读取坡度
      for (let itemSeg of race_info.seg_slopes) {
        if (
          itemUma.race.location >= itemSeg.start &&
          itemUma.race.location < itemSeg.end
        ) {
          itemUma.race.groundCurr.slope = itemSeg.slope;
          break;
        }
      }
      //读取弯道
      for (let itemSeg of race_info.seg_curves) {
        if (
          itemUma.race.location >= itemSeg.start &&
          itemUma.race.location < itemSeg.end
        ) {
          itemUma.race.groundCurr.isCurve = itemSeg.is_curve;
          itemUma.race.groundCurr.isLast = itemSeg.is_last;
          break;
        }
      }
      //读取赛程阶段 方法略有不同
      for (let indSeg of race_info.phases) {
        if (
          itemUma.race.location >= race_info.phases[indSeg] &&
          itemUma.race.location < race_info.span
        ) {
          itemUma.race.groundCurr.phase = indSeg;
        }
      }

      //重置目标速度和加速度为赛段基础值
      itemUma.race.velocityIdeal = itemUma.base.velocityIdeal *=
        itemUma.factorPhase.vStyle[itemUma.race.groundCurr.phase];
      itemUma.race.acceleration = itemUma.base.acceleration *=
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
              itemUma.staminaCostModFinal;
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
                itemUma.raceVelocityIdeal,
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
      if (itemUma.flag.finalRushRush) {
        itemUma.race.velocityIdeal = itemUma.race.velocityPlanRush;
      }

      //上坡减速
      if (itemUma.race.groundCurr.slope >= 0) {
        itemUma.flag.downhill = false;
        itemUma.race.velocityIdeal -=
          itemUma.race.groundCurr.slope * itemUma.factorSlope.up;
      }
      //下坡模式判定
      if (itemUma.race.groundCurr.slope < 0) {
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

          record_skill_sec[itemUma.index_race - 1].push(itemSkill.skilldata);
        }
      }
    }

    //计算红技时换成以index遍历
    for (let indUma in list_chara) {
      for (let itemSkill of list_chara[indUma].list_skill) {
        if (itemSkill.skilldata.typeDebuff && itemSkill.triggerFlag) {
          itemSkill.triggerTimeCount++;
          for (let targUma in list_chara) {
            if (
              targUma !== indUma &&
              targUma >= indUma - itemSkill.skilldata.rangeLeft &&
              targUma <= indUma + itemSkill.skilldata.rangeRight
            ) {
              list_chara[targUma].race.velocityReal -=
                itemSkill.skilldata.debuffVelocityReal;
              list_chara[targUma].race.velocityIdeal -=
                itemSkill.skilldata.debuffVelocityIdeal;
              list_chara[targUma].race.acceleration -=
                itemSkill.skilldata.debuffAcceleration;
              list_chara[targUma].race.stamina -=
                itemSkill.skilldata.debuffStamina *
                list_chara[targUma].base.stamina;
            }
          }
        }
      }
    }

    //结算
    for (let itemUma of list_chara) {
      //超速则不加速反而进行减速
      if (itemUma.race.velocityReal > itemUma.race.velocityIdeal) {
        itemUma.race.acceleration = raceDecel[itemUma.race.groundCurr.span];
      }
      //目标速度不会低于最低速度
      itemUma.race.velocityIdeal =
        itemUma.race.velocityIdeal < itemUma.base.velocityMin
          ? itemUma.base.velocityMin
          : itemUma.race.velocityIdeal;
      //扣耐不会成负数 回耐也不会超过初始上限
      itemUma.race.stamina -= itemUma.race.staminaCost;
      itemUma.race.stamina =
        itemUma.race.stamina < 0 ? 0 : itemUma.race.stamina;
      itemUma.race.stamina =
        itemUma.race.stamina > itemUma.base.stamina
          ? itemUma.base.stamina
          : itemUma.race.stamina;
      //空耐则目标速度掉为最低速度
      if (itemUma.race.stamina <= 0) {
        itemUma.race.velocityIdeal = itemUma.base.velocityMin;
        itemUma.race.acceleration = raceDecel[4];
      }
      //更新战报技能发动表
      record_skill_list.push(record_skill_sec);
    }
  }
}

module.exports = sys_sim_race;
