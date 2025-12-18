// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101191,
  10119,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.order_rate >= 50 &&
      args.remain_distance >= 500,
    (args) =>
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10005 &&
        args.distance_type === 3) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10005 &&
        args.distance_type === 4) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10009 &&
        args.distance_type === 3) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10009 &&
        args.distance_type === 4),
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
  [3, 0],
  [60, 0],
  0,
  0,
  true,
  false,
  [4, 5],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
// GENERATED END
