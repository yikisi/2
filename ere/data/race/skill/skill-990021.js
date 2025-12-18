const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  990021,
  99002,
  1,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.cheat,
  ),
  1,
  [(args) => args.phase < 2 && args.orgasm === 1, () => true],
  [(args) => args.phase === 2, (args) => args.phase === 2],
  [60, 60],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.HpRate,
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
    [-1, -0.5, 0],
    [-1, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.All,
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
  [0, 0],
  [0, 0],
  0,
  9999,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.ero],
);
