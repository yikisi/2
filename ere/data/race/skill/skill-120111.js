// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120111,
  12011,
  1,
  18,
  340,
  [
    (args) =>
      (args.distance_rate >= 50 &&
        args.order_rate <= 70 &&
        args.order_rate >= 30 &&
        args.overtake_target_time >= 1) ||
      (args.distance_rate >= 50 &&
        args.order_rate <= 70 &&
        args.order_rate >= 30 &&
        args.is_overtake === 1),
    (args) =>
      (args.distance_rate >= 50 &&
        args.order_rate <= 70 &&
        args.order_rate >= 30 &&
        args.overtake_target_time >= 1) ||
      (args.distance_rate >= 50 &&
        args.order_rate <= 70 &&
        args.order_rate >= 30 &&
        args.is_overtake === 1),
  ],
  [
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.is_basis_distance === 0,
    (args) => args.remain_distance <= 401 && args.remain_distance >= 399,
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
    [0.35, 0, 0],
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
  [UmaSkill.ability_tag_enum.targetSpeed],
);
// GENERATED END
