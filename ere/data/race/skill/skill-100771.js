const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100771,
  '荣光之路',
  '临近终盘若位于好位置，则在剩余400m的地方大幅提升速度，在长距离发动该技能时，若位于领头或距离领头1马身以内，则极大提升速度',
  10077,
  1,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 40,
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 40,
  ],
  [
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.distance_diff_top_float <= 25 &&
      args.distance_type === 4,
    (args) => args.remain_distance <= 401 && args.remain_distance >= 399,
  ],
  [5, 5],
  [500, 500],
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
    [0.55, 0, 0],
    [0.45, 0, 0],
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
);
