// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101171,
  10117,
  1,
  18,
  340,
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
  [4, 4],
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
    [0.55, 0, 0],
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
