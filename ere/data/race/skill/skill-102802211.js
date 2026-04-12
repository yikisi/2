// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  102802211,
  10280221,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.distance_type === 1 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50) ||
      (args.running_style === 2 &&
        args.distance_type === 2 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50),
    (args) =>
      args.running_style === 2 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate <= 50,
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
      UmaSkill.ability_type_enum.no,
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
    [0.5, 0, 0],
    [0.4, 0, 0],
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
  1,
  0,
  false,
  false,
  [2, 3, 7],
  [UmaSkill.ability_tag_enum.accel],
);
// GENERATED END
