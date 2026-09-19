// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  111001,
  11100,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.ground_type === 2 &&
        args.phase_firsthalf === 1 &&
        args.order >= 3 &&
        args.infront_near_lane_time >= 3) ||
      (args.ground_type === 2 &&
        args.phase_firsthalf === 1 &&
        args.order >= 3 &&
        args.behind_near_lane_time >= 3),
    (args) =>
      (args.phase_firsthalf === 1 &&
        args.order >= 3 &&
        args.infront_near_lane_time >= 3) ||
      (args.phase_firsthalf === 1 &&
        args.order >= 3 &&
        args.behind_near_lane_time >= 3),
  ],
  [6, 4],
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
    [0.35, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [1],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
// GENERATED END
