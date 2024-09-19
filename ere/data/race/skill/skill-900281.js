const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900281,
  "I'M☆FULL☆SPEED!!",
  '若比赛的中段处于好位置准备超越时，速度略微提升，若是短距离比赛，则效果改为略微向前突进',
  90028,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 60 &&
      args.order >= 2 &&
      args.order_rate <= 50 &&
      args.is_overtake === 1 &&
      args.distance_type === 1,
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 60 &&
      args.order >= 2 &&
      args.order_rate <= 50 &&
      args.is_overtake === 1,
  ],
  [3, 3],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.05, 0, 0],
    [0.05, 0, 0],
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
);
