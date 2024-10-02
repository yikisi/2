const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100911,
  '豪华☆喷泉',
  '进入终盘最终直线时若位于队伍中间，则剩余300m之后速度少量提升，如果能冷静地进行比赛则速度大幅提升',
  10091,
  1,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight_onetime === 1 &&
      args.order_rate >= 30 &&
      args.order_rate <= 70 &&
      args.temptation_count === 0,
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight_onetime === 1 &&
      args.order_rate >= 30 &&
      args.order_rate <= 70,
  ],
  [
    (args) => args.remain_distance <= 300,
    (args) => args.remain_distance <= 300,
  ],
  [5, 5],
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
    [0.45, 0, 0],
    [0.25, 0, 0],
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
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
