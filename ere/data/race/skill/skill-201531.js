const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201531,
  '先马诀窍◎',
  '容易占据有利位置＜先马＞',
  20153,
  UmaSkill.rarity_enum.normal,
  0,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 2, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [
      UmaSkill.ability_type_enum.Wiz,
      UmaSkill.ability_type_enum.VisibleDistance,
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
    [60, 10, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [3, 5],
  [15, 30],
  0,
  130,
  false,
  false,
);
