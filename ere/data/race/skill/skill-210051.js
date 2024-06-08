const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210051,
  '燃烧青春・智',
  '在比赛序盘燃烧青春之魂展望赛道，参赛队友的智力属性总和越高，路线的规划越高效',
  21005,
  UmaSkill.rarity_enum.gold,
  10,
  633,
  [() => true, () => true],
  [(args) => args.phase_random === 0, () => false],
  [4, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.LaneMoveSpeed,
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
      UmaSkill.ability_usage_enum.MultiplyTeamTotalWiz,
      UmaSkill.ability_usage_enum.MultiplyTeamTotalWiz,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.035, 15, 0],
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
  [5, 3],
  [30, 30],
  1,
  200,
  false,
  false,
);
