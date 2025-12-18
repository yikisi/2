const UmaEroSkill = require('#/data/race/model/ero-skill');
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaEroSkill(
  660011,
  66001,
  1,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.ero_normal,
  ),
  1,
  [() => true, () => true],
  [(args) => args.orgasm === 1, () => false],
  [3, 0],
  [30, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeed,
      UmaSkill.ability_type_enum.CurrentSpeed,
      UmaSkill.ability_type_enum.TemptationEndTime,
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
    [-0.15, -0.05, 5],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.SelfBehind,
      UmaSkill.target_type_enum.SelfInfront,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 5, 5],
    [0, 0, 0],
  ],
  [0, 0],
  [0, 0],
  0,
  66,
  false,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.temp,
    UmaSkill.ability_tag_enum.ero,
  ],
);
