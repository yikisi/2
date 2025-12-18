const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  902041,
  90204,
  1,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  180,
  [() => true, () => true],
  [
    (args) =>
      args.phase_firstquarter_random === 2 &&
      args.order_rate <= 40 &&
      args.distance_type >= 3,
    (args) => args.phase_firstquarter_random === 2 && args.order_rate <= 40,
  ],
  [3.6, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [0.2, 0.05, 0],
    [0.2, 0, 0],
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
  [1, 0],
  [15, 0],
  1,
  0,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed, UmaSkill.ability_tag_enum.accel],
);
