// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100141,
  10014,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.order_rate <= 40 &&
      args.course_distance === 2400 &&
      args.lastspurt === 2,
    (args) => args.is_last_straight === 1 && args.order_rate <= 40,
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
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
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
    [0.55, -0.04, 0],
    [0.25, 0.3, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  0,
  false,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.hpRate,
    UmaSkill.ability_tag_enum.targetSpeed,
    UmaSkill.ability_tag_enum.accel,
  ],
);
// GENERATED END
