const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202051,
  '大逃',
  '比通常的逃马策略更大幅度地拉开与后方的距离，并且一直到最后都甩开对手＜逃马＞',
  20205,
  1,
  UmaSkill.rarity_enum.gold,
  1,
  370,
  [() => true, () => true],
  [(args) => args.running_style === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [
      UmaSkill.ability_type_enum.RunningStyleExOonige,
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
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
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
  200,
  false,
  false,
);
