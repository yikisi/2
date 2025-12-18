// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108801211,
  10880121,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.course_distance >= 2200 &&
      args.course_distance <= 2400 &&
      args.phase_firstquarter_random === 2 &&
      args.order_rate >= 40,
    (args) =>
      (args.distance_type === 3 &&
        args.course_distance < 2200 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 40) ||
      (args.distance_type === 3 &&
        args.course_distance > 2400 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 40),
  ],
  [1.8, 1.8],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Accel,
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
    [0.5, -0.02, 0],
    [0.4, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  1,
  0,
  false,
  false,
  [4],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.accel],
);
// GENERATED END
