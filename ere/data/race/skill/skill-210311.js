// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210311,
  21031,
  1,
  16,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 &&
        args.distance_rate_after_random === 50 &&
        args.base_guts >= 1200) ||
      (args.distance_type === 3 &&
        args.distance_rate_after_random === 50 &&
        args.base_guts >= 1200),
    (args) =>
      (args.distance_type === 2 &&
        args.distance_rate_after_random === 50 &&
        args.base_guts < 1200) ||
      (args.distance_type === 3 &&
        args.distance_rate_after_random === 50 &&
        args.base_guts < 1200),
  ],
  [1.2, 1.2],
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
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
  [3, 0],
  [30, 0],
  1,
  170,
  false,
  false,
  [3, 4],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
// GENERATED END
