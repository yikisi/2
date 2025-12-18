// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901211,
  90121,
  1,
  16,
  180,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.change_order_onetime < 0,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.change_order_onetime < 0,
  ],
  [
    (args) =>
      (args.is_lastspurt === 1 &&
        args.phase === 3 &&
        args.order_rate >= 40 &&
        args.order_rate <= 80 &&
        args.distance_type === 1) ||
      (args.is_lastspurt === 1 &&
        args.phase === 3 &&
        args.order_rate >= 40 &&
        args.order_rate <= 80 &&
        args.distance_type === 2),
    (args) => args.is_lastspurt === 1 && args.phase === 3,
  ],
  [3, 3],
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
    [0.25, 0, 0],
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
  [2, 3],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
// GENERATED END
