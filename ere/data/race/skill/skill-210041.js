const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210041,
  '燃烧青春・根',
  '在比赛终盘燃烧青春之魂为脚部注入力量参赛队友的毅力属性总和越高越能提升速度与加速度',
  21004,
  UmaSkill.rarity_enum.gold,
  10,
  633,
  [() => true, () => true],
  [(args) => args.phase_random === 2, () => false],
  [1.8, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
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
      UmaSkill.ability_usage_enum.MultiplyTeamTotalGuts,
      UmaSkill.ability_usage_enum.MultiplyTeamTotalGuts,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.25, 0.3, 0],
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
  [1, 3],
  [30, 30],
  1,
  200,
  false,
  false,
);
