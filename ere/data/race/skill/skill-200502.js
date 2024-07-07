const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200502,
  '临机应变',
  '比赛终盘略微容易取得好路线',
  20050,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  129,
  [() => true, () => true],
  [(args) => args.phase_random === 2, () => false],
  [3, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.LaneMoveSpeed,
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
    [0.025, 0, 0],
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
  [3, 0],
  [25, 0],
  1,
  120,
  false,
  false,
);
