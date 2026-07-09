// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101361,
  10136,
  1,
  18,
  340,
  [(args) => args.distance_type === 2 || args.distance_type === 3, () => true],
  [
    (args) => args.phase === 2 && args.lastspurt === 2 && args.order_rate >= 40,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.run_at_full_speed_random === 1 &&
      args.is_used_skill_id_with_detail_one.includes(204452),
  ],
  [5, 2],
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
      UmaSkill.ability_type_enum.AccelFullSpeed,
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
    [0.3, 0, 0],
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
  [60, 0],
  0,
  0,
  true,
  false,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed, UmaSkill.ability_tag_enum.accelFull],
);
// GENERATED END
