const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  990011,
  99001,
  1,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.cheat,
  ),
  1,
  [() => true, () => true],
  [(args) => args.phase >= 2, () => false],
  [60, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.LaneMoveSpeed,
    ],
    [
      UmaSkill.ability_type_enum.no,
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
    [30, 1, 1],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [400, 400],
  0,
  9999,
  false,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.hpRate,
    UmaSkill.ability_tag_enum.laneMove,
  ],
);
