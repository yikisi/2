const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901171,
  '勇往直前快步疾舞',
  '若在比赛中盘以后成功超越，在进入最终直线后短时间略微提高速度；若在选择追马策略的情况下在中盘以后超越三次以上，则在进入最终直线后短时间内提高速度',
  90117,
  1,
  16,
  180,
  [
    (args) => args.running_style === 4 && args.phase >= 2,
    (args) => args.phase >= 2,
  ],
  [
    (args) =>
      (args.is_last_straight_onetime === 1 &&
        args.change_order_up_end_after >= 3) ||
      (args.is_last_straight_onetime === 1 &&
        args.change_order_up_end_after >= 2 &&
        args.change_order_up_middle >= 1) ||
      (args.is_last_straight_onetime === 1 &&
        args.change_order_up_end_after >= 1 &&
        args.change_order_up_middle >= 2) ||
      (args.is_last_straight_onetime === 1 && args.change_order_up_middle >= 3),
    (args) =>
      (args.is_last_straight_onetime === 1 &&
        args.change_order_up_end_after >= 1) ||
      (args.is_last_straight_onetime === 1 && args.change_order_up_middle >= 1),
  ],
  [2.4, 2.4],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
  ],
  [
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.35, 0, 0],
    [0.15, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
