const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201542,
  '差马诀窍○',
  '稍微容易占据有利位置＜差马＞',
  20154,
  UmaSkill.rarity_enum.normal,
  0,
  174,
  [() => true, () => true],
  [(args) => args.running_style === 3, () => false],
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
    [40, 5, 0],
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
  [10, 20],
  0,
  110,
  false,
  false,
);
