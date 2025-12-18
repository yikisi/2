const UmaEroSkill = require('#/data/race/model/ero-skill');
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaEroSkill(
  660032,
  66003,
  2,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.ero_advanced,
  ),
  1,
  [() => true, () => true],
  [(args) => args.orgasm === 1, () => false],
  [3, 0],
  [15, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.ShareOrgasm,
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
      UmaSkill.ability_usage_enum.MultiplyCount,
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
    [12000, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.All,
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
  166,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.ero],
);
