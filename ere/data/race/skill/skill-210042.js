const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210042,
  '点燃青春・根',
  '在比赛终盘燃烧青春之魂略微为脚部注入力量，参赛队友的毅力属性总和越高速度与加速度提升越多',
  21004,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  263,
  [() => true, () => true],
  [(args) => args.phase_random === 2, () => false],
  [1.8, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
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
    [0.05, 0.1, 0],
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
  [15, 15],
  1,
  200,
  false,
  false,
);
