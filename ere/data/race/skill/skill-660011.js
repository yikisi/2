const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  660011,
  '兴奋滴落',
  '高潮时稍微降低自身速度，略微降低身后最多5名对手的速度，并使身前最多5名对手陷入焦躁',
  66001,
  1,
  UmaSkill.rarity_enum.advanced,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.advanced,
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
  100,
  false,
  false,
  [],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.temp,
    UmaSkill.ability_tag_enum.ero,
  ],
);
