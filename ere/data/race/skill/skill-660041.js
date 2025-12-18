const UmaEroSkill = require('#/data/race/model/ero-skill');
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaEroSkill(
  660041,
  66004,
  1,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.heal,
    UmaSkill.skill_border_enum.ero_normal,
  ),
  1,
  [() => true, () => true],
  [(args) => args.milk === 1, () => false],
  [3, 0],
  [30, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
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
    [0.035, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.TeamMember,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
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
  [0, 0],
  [0, 0],
  0,
  66,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.ero],
);
