const { get_random_value } = require('#/utils/value-utils');

const RaceInfo = require('#/data/race/model/race-info');
const { ability_type_enum } = require('#/data/race/model/uma-skill');
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
  const pop_1 = list_chara.find((e) => e.pop[0] === 1);
  const running_style_counts = [0, 0, 0, 0];
  list_chara.forEach((uma) => running_style_counts[uma.style]++);
  for (const uma of list_chara) {
    uma.race.conditionParams.running_style = uma.style;
    uma.race.conditionParams.running_style_count_nige_otherself =
      running_style_counts[0] - (uma.style === 0);
    uma.race.conditionParams.running_style_count_senko_otherself =
      running_style_counts[1] - (uma.style === 1);
    uma.race.conditionParams.running_style_count_sashi_otherself =
      running_style_counts[2] - (uma.style === 2);
    uma.race.conditionParams.running_style_count_oikomi_otherself =
      running_style_counts[3] - (uma.style === 3);
    uma.race.conditionParams.running_style_count_same =
      running_style_counts[uma.style];
    uma.race.conditionParams.running_style_count_same_rate =
      (uma.race.conditionParams.running_style_count_same * 100) /
      list_chara.length;
    uma.race.conditionParams.running_style_equal_popularity_one = Number(
      uma.style === pop_1.style,
    );
    // 分配赛道 及初始名次以避免意外
    uma.rank = {
      curr: uma.index_race,
      last: uma.index_race,
    };

    uma.adapts.style = uma.adapt_style_list[uma.style];

    // 计算心情对面板的增幅
    Object.values(attr_enum).forEach((v) => {
      uma.attrs[v] *= 1 + uma.motivation * 0.02;
    });

    // 由基础智力决定技能触发率 最低20%
    uma.probs.skill = Math.max(1 - 90 / uma.attrs[attr_enum.intelligence], 0.2);

    //计算比赛偏重属性对速度属性的增幅
    uma.attrs[attr_enum.speed] *=
      1 +
      race_info.attr_bonus.reduce(
        (p, c) => p + Math.min(0.05 * Math.ceil(uma.attrs[c] / 300), 0.2),
        0,
      ) /
        race_info.attr_bonus.length;

    //不良马场对速度属性的减幅
    if (race_info.mess === RaceInfo.mess_enum.bad) {
      uma.attrs[attr_enum.speed] -= 50;
    }

    //赛道状况对力量属性的减幅
    if (race_info.ground === RaceInfo.ground_enum.grass) {
      //草地良则不减 其余-50
      uma.attrs[attr_enum.strength] -=
        50 * (race_info.mess === RaceInfo.mess_enum.well);
    } else {
      //泥地稍重则-50 其余-100
      uma.attrs[attr_enum.strength] -=
        100 - 50 * (race_info.mess === RaceInfo.mess_enum.semi);
    }

    //跑法适应性为智力提供乘算系数
    uma.attrs[attr_enum.intelligence] *=
      mod_attr_intelligence_adapt_style[uma.adapts.style];

    let temptation_prob = 0;
    // 计算整个比赛生效的被动属性加成技能
    // 筛除结算完毕的常时被动 只留触发技能给比赛模拟
    uma.list_skill = uma.list_skill.filter((skill) => {
      if (skill.data.ability_times[0] >= 0) {
        // TODO 测试用，所有主动技能进比赛，测完后记得去掉这条
        // return skill.data.is_random === 0 || Math.random() < uma.probs.skill;
        return true;
      }
      for (let i = 0; i < skill.data.ability_times.length; ++i) {
        if (
          skill.data.preconditions[i](uma.race.preConditionParams) &&
          skill.data.conditions[i](uma.race.conditionParams)
        ) {
          for (let j = 0; j < skill.data.ability_types.length; ++j) {
            switch (skill.data.ability_types[j]) {
              case ability_type_enum.Speed:
                uma.attrs[attr_enum.speed] += skill.data.ability_values[i][j];
                break;
              case ability_type_enum.Stamina:
                uma.attrs[attr_enum.endurance] +=
                  skill.data.ability_values[i][j];
                break;
              case ability_type_enum.Power:
                uma.attrs[attr_enum.strength] +=
                  skill.data.ability_values[i][j];
                break;
              case ability_type_enum.Guts:
                uma.attrs[attr_enum.toughness] +=
                  skill.data.ability_values[i][j];
                break;
              case ability_type_enum.Wiz:
                uma.attrs[attr_enum.intelligence] +=
                  skill.data.ability_values[i][j];
                break;
              case ability_type_enum.RunningStyleExOonige:
                uma.race.conditionParams.is_used_skill_id = 202051;
                break;
              case ability_type_enum.TemptationPer:
                temptation_prob += skill.data.ability_values[i][j];
              // case ability_type_enum.VisibleDistance:
            }
          }
          break;
        }
      }
    });

    // 焦躁计算
    temptation_prob += Math.pow(
      (6.5 * Math.log(10)) /
        Math.log(0.1 * uma.attrs[attr_enum.intelligence] + 1),
      2,
    );
    if (100 * Math.random() < temptation_prob) {
      uma.flag.allowTemptation = true;
    }
    uma.attrs = uma.attrs.map((e) => Math.max(e, 1));

    //调取当前跑法在赛中各阶段的目标速度及加速度倍率
    uma.factorPhase.vStyle = mod_velocity_style[uma.style];
    uma.factorPhase.aStyle = mod_acceleration_style[uma.style];

    //由赛道长度决定普通状态下的目标速度
    uma.base.velocityIdeal = 22 - race_info.span / 1000;

    //由复合因素决定终盘阶段的目标速度增加量
    uma.factorFinal.vIdealAdd =
      Math.sqrt(500 * uma.attrs[attr_enum.speed]) *
      mod_velocity_final_adapt_distance[uma.adapts.distance] *
      0.002;

    //由智力决定目标速度随机浮动值
    const mod_velocity_random_upper =
      (uma.attrs[attr_enum.intelligence] / 550000) *
      (Math.log(uma.attrs[attr_enum.intelligence] * 0.1) / Math.log(10));
    uma.factorPhase.vRand = uma.factorPhase.vRand.map(
      () =>
        1 +
        uma.base.velocityIdeal *
          get_random_value(
            mod_velocity_random_upper - 0.0065,
            mod_velocity_random_upper,
          ),
    );

    //由速度及根性属性决定冲刺状态下的最大目标速度
    uma.base.velocityMaxRush =
      1.05 * uma.base.velocityIdeal * (uma.factorPhase.vStyle[2] + 0.01) +
      2.05 * uma.factorFinal.vIdealAdd +
      Math.pow(450 * uma.attrs[attr_enum.toughness], 0.597) * 0.0001;

    //由根性决定最低速度
    uma.base.velocityMin =
      uma.base.velocityIdeal * 0.85 +
      Math.sqrt(200 * uma.attrs[attr_enum.toughness]) * 0.001;

    //由力量决定基础加速度
    uma.base.acceleration =
      0.006 *
      Math.sqrt(500 * uma.attrs[attr_enum.strength]) *
      mod_acceleration_adapt_ground[uma.adapts.ground] *
      mod_acceleration_adapt_distance[uma.adapts.distance];

    //由耐力属性以及400隐藏基础耐力决定耐力条 顺便填满
    uma.race.stamina = uma.base.stamina =
      0.8 *
        (uma.attrs[attr_enum.endurance] + 400) *
        mod_attr_stamina_style[uma.style] +
      race_info.span;

    //由根性属性决定终盘后耐力消耗系数
    uma.factorFinal.sCostMult =
      1 + 200 / Math.sqrt(600 * uma.attrs[attr_enum.toughness]);

    //由力量决定受上坡减速的影响程度 最大100%
    uma.factorSlope.up = Math.min(200 / uma.attrs[attr_enum.strength], 1);

    //由智力决定受下坡加速的影响概率
    uma.factorSlope.down = 0.0004 * uma.attrs[attr_enum.intelligence];

    //由智力决定最终冲刺计划的选择概率
    uma.probs.planRush = 0.15 + 0.0005 * uma.attrs[attr_enum.intelligence];
  }
}

module.exports = sys_prepare_race;
