const { logger } = require('#/era-electron');

const {
  reset_loc_mind_other_diff,
  reset_running_style,
} = require('#/system/race/snippets');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const RaceInfo = require('#/data/race/model/race-info');
const {
  ability_type_enum,
  skill_name_enum,
} = require('#/data/race/model/uma-skill');
const {
  max_attr,
  mod_motivation_coefficients,
} = require('#/data/race/race-sim-const');
const {
  mod_acceleration_adapt_distance,
  mod_acceleration_adapt_ground,
  mod_acceleration_style,
  mod_attr_intelligence_adapt_style,
  mod_attr_stamina_style,
  mod_velocity_final_adapt_distance,
  mod_velocity_style,
} = require('#/data/race/race-sim-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

/**
 * @param {PseudoUma[]} list_chara
 * @param {PseudoUma[]} team_list
 * @param {RaceInfo} race_info
 */
function sys_prepare_race(list_chara, team_list, race_info) {
  const current = new Date().getTime();
  const pop_1 = list_chara.find((e) => e.pop[0] === 1);
  const running_style_counts = [0, 0, 0, 0];
  const skill_counts = {};
  list_chara.forEach((uma) => running_style_counts[uma.style]++);
  // 同理心、一匹狼
  [201631, 201641].forEach(
    (e) =>
      (skill_counts[e] = list_chara.filter((uma) =>
        uma.list_skill.some((s) => s.data.id === e),
      ).length),
  );
  // 同调
  if (
    list_chara.some((uma) => uma.list_skill.some((s) => s.data.id === 201632))
  ) {
    skill_counts[201631] = 5;
  }

  const corners = [];
  const down_slopes = race_info.slopes.filter((e) => e.slope < 0);
  const up_slopes = race_info.slopes.filter((e) => e.slope > 0);
  const middle_corners = [];
  const straights = [];
  const loc_mind_base_diff = 0.0008 * (race_info.span - 1000) + 1;
  let flag_final = true;
  let final_corner = undefined;
  let final_straight = undefined;
  // 给弯道分配用于计算的corner
  for (let i = race_info.lanes.length - 1; i >= 0; --i) {
    const lane = race_info.lanes[i];
    if (lane.is_curve) {
      if (lane.is_last) {
        final_corner = lane;
      }
      if (flag_final) {
        lane.corner = lane.index;
        corners.unshift(lane);
        if (lane.index === 1) {
          flag_final = false;
        }
      } else {
        lane.corner = -1;
      }
      if (lane.end > race_info.phases[0] || lane.start < race_info.phases[1]) {
        middle_corners.unshift(lane);
      }
    } else {
      if (lane.is_last) {
        final_straight = lane;
      }
      straights.unshift(lane);
      lane.corner = 0;
    }
  }

  // 位置意识
  // 逃
  race_info.loc_mind_diff.nige_speed_up_nige[0] = Math.max(
    loc_mind_base_diff,
    4.5,
  );
  race_info.loc_mind_diff.nige_speed_up_other[0] = Math.max(
    5 * loc_mind_base_diff,
    12.5,
  );
  race_info.loc_mind_diff.nige_over_take[0] = Math.max(
    3 * loc_mind_base_diff,
    10,
  );

  // 大逃
  race_info.loc_mind_diff.nige_speed_up_nige[1] = Math.max(
    6 * loc_mind_base_diff,
    17.5,
  );
  race_info.loc_mind_diff.nige_speed_up_other[1] =
    race_info.loc_mind_diff.nige_speed_up_nige[1];
  race_info.loc_mind_diff.nige_over_take[1] = Math.max(
    8 * loc_mind_base_diff,
    27.5,
  );

  // 先
  race_info.loc_mind_diff.other_lower[0] = 3;
  race_info.loc_mind_diff.other_upper[0] = 5 * loc_mind_base_diff;

  // 差
  race_info.loc_mind_diff.other_lower[1] = 6.5 * loc_mind_base_diff;
  race_info.loc_mind_diff.other_upper[1] = 7 * loc_mind_base_diff;

  // 追
  race_info.loc_mind_diff.other_lower[2] = 7.5 * loc_mind_base_diff;
  race_info.loc_mind_diff.other_upper[2] = 8 * loc_mind_base_diff;

  const team_total_attrs = new Array(5).fill(0),
    half_attr_border = max_attr - 2 * race_info.extra_attr;

  const count_204322 = list_chara.filter((u) =>
    u.list_skill.some((s) => s.data.id === 204322),
  ).length;

  for (const uma of list_chara) {
    uma.base.skill_count = uma.list_skill.length;
    uma.race.conditionParams.activate_count_all = 0;
    uma.race.conditionParams.activate_count_end_after = 0;
    uma.race.conditionParams.activate_count_heal = 0;
    uma.race.conditionParams.activate_count_later_half = 0;
    uma.race.conditionParams.activate_count_middle = 0;
    uma.race.conditionParams.activate_count_start = 0;
    uma.race.conditionParams.behind_near_lane_time = 0;
    uma.race.conditionParams.behind_near_lane_time_set1 = 0;
    uma.race.conditionParams.blocked_front_continuetime = 0;
    uma.race.conditionParams.blocked_side_continuetime = 0;
    uma.race.conditionParams.change_order_up_end_after = 0;
    uma.race.conditionParams.change_order_up_finalcorner_after = 0;
    uma.race.conditionParams.change_order_up_middle = 0;
    uma.race.conditionParams.infront_near_lane_time = 0;
    uma.race.conditionParams.is_lastspurt = 0;
    uma.race.conditionParams.is_exist_skill_id =
      skill_counts[201631] > 0 ? 201631 : 0;
    uma.race.conditionParams.is_other_character_activate_advantage_skill = 0;
    uma.race.conditionParams.is_temptation = 0;
    uma.race.conditionParams.is_used_skill_id = [];
    uma.race.conditionParams.is_used_skill_id_with_detail_one = [];
    uma.race.conditionParams.lastspurt = 0;
    uma.race.conditionParams.order_rate_in20_continue = 1;
    uma.race.conditionParams.order_rate_in50_continue = 1;
    uma.race.conditionParams.order_rate_in80_continue = 1;
    uma.race.conditionParams.order_rate_out20_continue = 1;
    uma.race.conditionParams.order_rate_out40_continue = 1;
    uma.race.conditionParams.order_rate_out50_continue = 1;
    uma.race.conditionParams.order_rate_out70_continue = 1;
    uma.race.conditionParams.overtake_target_no_order_up_time = 0;
    uma.race.conditionParams.overtake_target_time = 0;
    uma.race.conditionParams.phase = 0;
    uma.race.conditionParams.phase_firstquarter = 0;
    reset_running_style(uma, running_style_counts, list_chara.length);
    uma.race.conditionParams.running_style_equal_popularity_one = Number(
      uma.style === pop_1.style,
    );
    uma.race.conditionParams.temptation_count = 0;
    // 分配赛道 及初始名次以避免意外
    uma.rank = {
      curr: uma.index_race,
      last: uma.index_race,
    };

    uma.race.lane_move_buff += 0.01 * (uma.chara === -2);

    // 计算随机位置
    let temp;
    uma.random.all_corner = corners.map((e) =>
      get_random_value(e.start, e.end - 10),
    );
    uma.random.corner = corners.map((e) => ({
      loc: get_random_value(e.start, e.end - 10),
      corner: e.corner,
    }));
    uma.random.distance_rate_after = get_random_value(
      (race_info.span * 16) / 24,
      race_info.span - 10,
    );
    temp = get_random_entry(down_slopes);
    if (temp) {
      uma.random.down_slope = get_random_value(temp.start, temp.end - 10);
    }
    if (final_corner) {
      uma.random.is_finalcorner = get_random_value(
        final_corner.start,
        race_info.span - 10,
      );
    }
    if (final_straight) {
      uma.random.last_straight = get_random_value(
        final_straight.start,
        final_straight.end - 10,
      );
    }
    uma.random.phase = [
      get_random_value(0, (race_info.span * 4) / 24 - 10),
      get_random_value(
        (race_info.span * 4) / 24,
        (race_info.span * 16) / 24 - 10,
      ),
      get_random_value(
        (race_info.span * 16) / 24,
        (race_info.span * 20) / 24 - 10,
      ),
      get_random_value((race_info.span * 20) / 24, race_info.span - 10),
    ];
    temp = get_random_entry(middle_corners);
    if (temp) {
      uma.random.phase_corner = [
        50000,
        get_random_value(
          Math.max(temp.start, race_info.phases[0]),
          Math.min(temp.end, race_info.phases[1]) - 10,
        ),
      ];
    }
    uma.random.phase_firsthalf = [
      get_random_value(0, (race_info.span * 2) / 24),
      get_random_value((race_info.span * 4) / 24, (race_info.span * 10) / 24),
      get_random_value((race_info.span * 16) / 24, (race_info.span * 18) / 24),
      get_random_value((race_info.span * 20) / 24, (race_info.span * 22) / 24),
    ];
    uma.random.phase_firstquarter = [
      50000,
      50000,
      get_random_value(
        (race_info.span * 16) / 24,
        (race_info.span * 17) / 24 - 10,
      ),
    ];
    uma.random.phase_laterhalf = [
      get_random_value(
        (race_info.span * 2) / 24,
        (race_info.span * 4) / 24 - 10,
      ),
      get_random_value(
        (race_info.span * 10) / 24,
        (race_info.span * 16) / 24 - 10,
      ),
      get_random_value(
        (race_info.span * 18) / 24,
        (race_info.span * 20) / 24 - 10,
      ),
    ];
    temp = get_random_entry(straights);
    if (temp) {
      uma.random.straight = get_random_value(temp.start, temp.end - 10);
    }
    temp = get_random_entry(up_slopes);
    if (temp) {
      uma.random.up_slope = get_random_value(temp.start, temp.end - 10);
    }

    uma.adapts.style = Math.max(
      Math.min(
        uma.adapt_style_list[uma.style],
        mod_attr_intelligence_adapt_style.length - 1,
      ),
      0,
    );

    let motivation_coefficient = (mod_motivation_coefficients[uma.chara] ||
      mod_motivation_coefficients.default)[uma.motivation + 2];
    switch (uma.chara) {
      case 1:
        motivation_coefficient += 0.01;
        break;
      case 2:
        motivation_coefficient += race_info.has_legend * 0.01;
        break;
      case 3:
        motivation_coefficient +=
          race_info.has_legend * 0.02 - !race_info.has_legend * 0.01;
    }

    // 计算基础属性值（属性值加干劲修正）
    base_attr_list.forEach((v) => {
      uma.attrs[v] *= motivation_coefficient;
      if (uma.attrs[v] > half_attr_border) {
        uma.attrs[v] = half_attr_border + (uma.attrs[v] - half_attr_border) / 2;
      }
    });

    if (team_list.indexOf(uma) !== -1) {
      uma.base.total_attrs = team_total_attrs;
      base_attr_list.forEach((v) => (team_total_attrs[v] += uma.attrs[v]));
    }

    // 由基础智力决定技能触发率 最低20%
    uma.probs.skill =
      (uma.attrs[attr_enum.intelligence] < 56.25
        ? 0.2
        : Math.max(1 - 45 / uma.attrs[attr_enum.intelligence], 0.2)) +
      0.01 * (uma.chara === 0);

    //计算比赛偏重属性对速度属性的增幅
    if (race_info.attr_bonus.length > 0) {
      uma.attrs[attr_enum.speed] *=
        1 +
        race_info.attr_bonus.reduce(
          (p, c) => p + Math.min(0.05 * Math.floor(uma.attrs[c] / 300), 0.2),
          0,
        ) /
          race_info.attr_bonus.length;
    }

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

    let temptation_prob = -(uma.chara === 0);
    // 计算整个比赛生效的被动属性加成技能
    // 筛除结算完毕的常时被动 只留触发技能给比赛模拟
    uma.list_skill = uma.list_skill.filter((skill) => {
      const category = skill.data.category >> 3;
      if (
        category !== skill_name_enum.buff &&
        category !== skill_name_enum.debuff
      ) {
        return skill.data.is_random === 0 || Math.random() < uma.probs.skill;
      }
      uma.race.conditionParams.same_skill_horse_count =
        skill_counts[skill.data.id] || 0;
      for (let i = 0; i < skill.data.ability_times.length; ++i) {
        if (
          skill.data.preconditions[i](uma.race.conditionParams) &&
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
                uma.race.conditionParams.is_used_skill_id.push(skill.data.id);
                break;
              case ability_type_enum.TemptationPer:
                temptation_prob += skill.data.ability_values[i][j];
                break;
              case ability_type_enum.VisibleDistance:
                uma.race.visible_dis += skill.data.ability_values[i][j];
                break;
              case ability_type_enum.AllAttrIncrease:
                uma.attrs = uma.attrs.map(
                  (attr) => attr + skill.data.ability_types[i][j],
                );
                break;
              case ability_type_enum.Connect:
            }
          }
          uma.base.greenCount++;
          uma.race.conditionParams.activate_count_all++;
          uma.race.conditionParams.activate_count_start++;
          if (skill.data.id === 203781) {
            uma.race.conditionParams.is_used_skill_id.push(skill.data.id);
          }
        }
      }
    });

    // 阿哞合拍的计数
    // 目前只有此技能需要计算持有相同技能的马娘然后影响效果变化，所以只在这里处理
    // 如果出现其他技能，则挪到 sub-simulate-skill.js 中
    uma.race.conditionParams.same_skill_horse_count = count_204322;

    // 位置意识概率
    uma.probs.loc_mind =
      ((15 + 5 * (uma.style === 0)) *
        Math.log(uma.attrs[attr_enum.intelligence] / 10)) /
      Math.log(10) /
      100;

    // 焦躁计算
    temptation_prob += Math.pow(
      (6.5 * Math.log(10)) / Math.log(0.1 * uma.attrs[attr_enum.toughness] + 1),
      2,
    );
    if (100 * Math.random() < temptation_prob) {
      uma.base.temptationSpan = get_random_value(2, 9) * (race_info.span / 24);
    } else {
      uma.base.temptationSpan = 50000;
    }

    // 计算育成加值后
    uma.attrs = uma.attrs.map((e) =>
      Math.min(Math.max(e + race_info.extra_attr, 1), max_attr),
    );

    // 01234：大逃、逃先差追
    const style_index =
      uma.style + uma.race.conditionParams.is_used_skill_id.includes(202051);
    //调取当前跑法在赛中各阶段的目标速度及加速度倍率
    uma.factorPhase.vStyle = mod_velocity_style[style_index];
    uma.factorPhase.aStyle = mod_acceleration_style[style_index];

    //由赛道长度决定普通状态下的目标速度
    uma.base.velocityIdeal = 20 - (race_info.span - 2000) / 1000;

    //由复合因素决定终盘阶段的目标速度增加量
    uma.factorFinal.vIdealAdd =
      Math.sqrt(500 * uma.attrs[attr_enum.speed]) *
      mod_velocity_final_adapt_distance[uma.adapts.distance] *
      0.002;

    //由智力决定目标速度随机浮动值
    const mod_velocity_random_upper =
      (uma.attrs[attr_enum.intelligence] / 5500) *
      (Math.log(uma.attrs[attr_enum.intelligence] * 0.1) / Math.log(10));
    uma.factorPhase.vRand = uma.factorPhase.vRand.map(
      () =>
        (uma.base.velocityIdeal *
          get_random_value(
            mod_velocity_random_upper - 0.0065,
            mod_velocity_random_upper,
            true,
          )) /
        100,
    );

    // 由速度及根性属性决定冲刺状态下的最大目标速度
    uma.base.velocityMaxRush =
      (uma.base.velocityIdeal * uma.factorPhase.vStyle[2] +
        uma.factorFinal.vIdealAdd +
        0.01 * uma.base.velocityIdeal) *
        1.05 +
      uma.factorFinal.vIdealAdd * 0.002 +
      Math.pow(450 * uma.attrs[attr_enum.toughness], 0.597) * 0.0001;

    // 由根性决定最低速度
    uma.base.velocityMin =
      uma.base.velocityIdeal * 0.85 +
      Math.sqrt(200 * uma.attrs[attr_enum.toughness]) * 0.001;

    // 由力量决定基础加速度
    uma.base.acceleration =
      0.0006 *
      Math.sqrt(500 * uma.attrs[attr_enum.strength]) *
      mod_acceleration_adapt_ground[uma.adapts.ground] *
      mod_acceleration_adapt_distance[uma.adapts.distance];

    // 由耐力属性决定耐力条 顺便填满
    uma.race.stamina = uma.base.stamina =
      0.8 *
        uma.attrs[attr_enum.endurance] *
        mod_attr_stamina_style[style_index] +
      race_info.span;

    // 由根性属性决定终盘后耐力消耗系数
    uma.factorFinal.sCostMult =
      1 + 200 / Math.sqrt(600 * uma.attrs[attr_enum.toughness]);

    // 根性决定追比的目标速度和加速度加成
    uma.factorFinal.vCompeteFightBuff =
      Math.pow(200 * uma.attrs[attr_enum.toughness], 0.708) * 0.0001;
    uma.factorFinal.accCompeteFightBuff =
      Math.pow(160 * uma.attrs[attr_enum.toughness], 0.59) * 0.0001;

    // 由力量决定受上坡减速的影响程度 最大100%
    uma.factorSlope.up = 200 / uma.attrs[attr_enum.strength];

    // 由智力决定受下坡加速的影响概率
    uma.factorSlope.down = 0.0004 * uma.attrs[attr_enum.intelligence];

    // 由智力决定最终冲刺计划的选择概率
    uma.probs.planRush = 0.15 + 0.0005 * uma.attrs[attr_enum.intelligence];

    uma.race.style = uma.style;

    if (uma.race.style > 0) {
      reset_loc_mind_other_diff(uma, race_info);
    }
  }
  logger.debug(`比赛相关变量预计算：${new Date().getTime() - current} ms`);
}

module.exports = sys_prepare_race;
