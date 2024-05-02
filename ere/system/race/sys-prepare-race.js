// const era = require('#/era-electron');
const { sort_list } = require('#/utils/list-utils');

const RaceInfo = require('#/data/race/model/race-info');
const {
  mod_acceleration_adapt_distance,
  mod_acceleration_adapt_ground,

  mod_acceleration_style,
  mod_attr_intelligence_adapt_style,

  mod_attr_stamina_style,
  mod_velocity_final_adapt_distance,
  mod_velocity_style,
} = require('#/data/race/race-const.json');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {PseudoUma[]} list_chara
 * @param {RaceInfo} race_info
 */
function sys_prepare_race(list_chara, race_info) {
  // Shuffle一下角色列表
  list_chara = sort_list(list_chara, Math.random);

  for (const itemUma of list_chara) {
    // 分配赛道 及初始名次以避免意外
    itemUma.rank = {
      curr: itemUma.index_race,
      last: itemUma.index_race,
    };

    itemUma.adapts.style = itemUma.adapt_style_list[itemUma.style];

    // 先从临时技能表中筛除所有不相关技能
    itemUma.list_skill = itemUma.list_skill.filter(
      (itemSkill) =>
        !(
          // 跟比赛无关的技能
          (
            !itemSkill.skilldata.typeRace ||
            // 有方向限制且不符
            (itemSkill.skilldata.typeRotation !== undefined &&
              itemSkill.skilldata.typeRotation !== race_info.rotation) ||
            // 有赛程限制且不符
            (itemSkill.skilldata.typeDistance !== undefined &&
              itemSkill.skilldata.typeDistance !== race_info.distance) ||
            // 有地面限制且不符
            (itemSkill.skilldata.typeGround !== undefined &&
              itemSkill.skilldata.typeGround !== race_info.ground) ||
            // 有跑法限制且不符
            (itemSkill.skilldata.typeStyle !== undefined &&
              itemSkill.skilldata.typeStyle !== itemUma.style) ||
            // 有赛马场限制且不符
            (itemSkill.skilldata.typeTrack !== undefined &&
              itemSkill.skilldata.typeTrack !== race_info.track) ||
            // 有根干距离限制且不符
            (itemSkill.skilldata.typeSpan400 !== undefined &&
              itemSkill.skilldata.typeSpan400 !== race_info.span400) ||
            // 有良马场限制且不符
            (itemSkill.skilldata.typeMess === false &&
              race_info.mess !== RaceInfo.mess_enum.well) ||
            // 有不良马场限制且不符
            (itemSkill.skilldata.typeMess === true &&
              race_info.mess === RaceInfo.mess_enum.well)
          )
        ),
    );

    //计算心情对面板的增幅
    let mod_attr_motivation = 1 + itemUma.motivation * 0.02;
    Object.values(attr_enum).forEach((v) => {
      itemUma.attrs[v] *= mod_attr_motivation;
    });

    //不良马场对速度属性的减幅
    if (race_info.mess === RaceInfo.mess_enum.bad) {
      itemUma.attrs[attr_enum.speed] -= 50;
    }

    //赛道状况对力量属性的减幅
    if (race_info.ground === RaceInfo.ground_enum.grass) {
      //草地良则不减 其余-50
      itemUma.attrs[attr_enum.strength] =
        race_info.mess === RaceInfo.mess_enum.well
          ? itemUma.attrs[attr_enum.strength]
          : itemUma.attrs[attr_enum.strength] - 50;
    } else {
      //泥地稍重则-50 其余-100
      itemUma.attrs[attr_enum.strength] =
        race_info.mess === RaceInfo.mess_enum.semi
          ? itemUma.attrs[attr_enum.strength] - 50
          : itemUma.attrs[attr_enum.strength] - 100;
    }

    //跑法适应性为智力提供乘算系数
    itemUma.attrs[attr_enum.intelligence] *=
      mod_attr_intelligence_adapt_style[itemUma.adapts.style];

    //计算比赛偏重属性对速度属性的增幅
    let mod_attr_speed_race_bonus = 1;
    if (race_info.bonus1 !== undefined) {
      mod_attr_speed_race_bonus +=
        0.025 * Math.floor(itemUma.attrs[race_info.bonus1] / 300);
    }
    if (race_info.bonus2 !== undefined) {
      mod_attr_speed_race_bonus +=
        0.025 * Math.floor(itemUma.attrs[race_info.bonus2] / 300);
    }
    itemUma.attrs[attr_enum.speed] *= mod_attr_speed_race_bonus;

    //计算整个比赛生效的被动属性加成技能
    //筛除结算完毕的常时被动 只留触发技能给比赛模拟
    itemUma.list_skill = itemUma.list_skill.filter((itemSkill) => {
      if (!itemSkill.skilldata.typeTrigger) {
        //被动技能直接结算
        Object.values(attr_enum).forEach(
          (v) => (itemUma.attrs[v] += itemSkill.skilldata.attrBonus[v]),
        );
      } else {
        //触发类技能则计算一下持续时间
        //无持续时间的回复类就只给一次（=一秒）
        itemSkill.triggerTimeMax = (itemSkill.duration * race_info.span) / 1000;
        itemSkill.triggerTimeMax =
          itemSkill.triggerTimeMax > 1 ? itemSkill.triggerTimeMax : 1;
      }
      return itemSkill.skilldata.typeTrigger;
    });

    //防止出0
    Object.values(attr_enum).forEach((v) => {
      if (itemUma.attrs[v] <= 0) {
        itemUma.attrs[v] = 1;
      }
    });

    //调取当前跑法在赛中各阶段的目标速度及加速度倍率
    // TODO PseudoUma.style变成enum
    itemUma.factorPhase.vStyle = mod_velocity_style[itemUma.style];
    itemUma.factorPhase.aStyle = mod_acceleration_style[itemUma.style];

    //由赛道长度决定普通状态下的目标速度
    itemUma.base.velocityIdeal = 22 - 0.001 * race_info.span;

    //由复合因素决定终盘阶段的目标速度增加量
    itemUma.factorFinal.vIdealAdd =
      Math.sqrt(500 * itemUma.attrs[attr_enum.speed]) *
      mod_velocity_final_adapt_distance[itemUma.adapts.distance] *
      0.002;

    //由智力决定目标速度随机浮动值
    itemUma.factorPhase.vRand = [];
    let mod_velocity_random_upper =
      (itemUma.attrs[attr_enum.intelligence] / 550000) *
      (Math.log(itemUma.attrs[attr_enum.intelligence] * 0.1) / Math.log(10));
    let mod_velocity_random_lower = mod_velocity_random_upper - 0.0065;
    for (let ind = 0; ind < 3; ind++) {
      itemUma.factorPhase.vRand.push(
        1 +
          itemUma.base.velocityIdeal *
            (Math.random() *
              (mod_velocity_random_upper - mod_velocity_random_lower) +
              mod_velocity_random_lower),
      );
    }

    //由速度及根性属性决定冲刺状态下的最大目标速度
    itemUma.base.velocityMaxRush =
      1.05 *
        itemUma.base.velocityIdeal *
        (itemUma.factorPhase.vStyle[2] + 0.01) +
      2.05 * itemUma.factorFinal.vIdealAdd +
      Math.pow(450 * itemUma.attrs[attr_enum.toughness], 0.597) * 0.0001;

    //由根性决定最低速度
    itemUma.base.velocityMin =
      itemUma.base.velocityIdeal * 0.85 +
      Math.sqrt(200 * itemUma.attrs[attr_enum.toughness]) * 0.001;

    //由力量决定基础加速度
    itemUma.base.acceleration =
      0.006 *
      Math.sqrt(500 * itemUma.attrs[attr_enum.strength]) *
      mod_acceleration_adapt_ground[itemUma.adapts.ground] *
      mod_acceleration_adapt_distance[itemUma.adapts.distance];

    //由耐力属性以及400隐藏基础耐力决定耐力条 顺便填满
    itemUma.base.stamina =
      0.8 *
        (itemUma.attrs[attr_enum.endurance] + 400) *
        mod_attr_stamina_style[itemUma.style] +
      race_info.span;
    itemUma.race.stamina = itemUma.base.stamina;

    //由根性属性决定终盘后耐力消耗系数
    itemUma.factorFinal.sCostMult =
      1 + 200 / Math.sqrt(600 * itemUma.attrs[attr_enum.toughness]);

    //由智力决定技能触发率 最低20%
    itemUma.probs.skill = 1 - 90 / itemUma.attrs[attr_enum.intelligence];
    itemUma.probs.skill = itemUma.probs.skill < 0.2 ? 0.2 : itemUma.probs.skill;

    //由力量决定受上坡减速的影响程度 最大100%
    itemUma.factorSlope.up = 200 / itemUma.attrs[attr_enum.strength];
    itemUma.factorSlope.up =
      itemUma.factorSlope.up > 1 ? 1 : itemUma.factorSlope.up;

    //由智力决定受下坡加速的影响概率
    itemUma.factorSlope.down = 0.0004 * itemUma.attrs[attr_enum.intelligence];

    //由智力决定最终冲刺计划的选择概率
    itemUma.probs.planRush =
      0.15 + 0.0005 * itemUma.attrs[attr_enum.intelligence];
  }
}

module.exports = sys_prepare_race;
