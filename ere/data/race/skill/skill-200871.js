const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200871,
  '先马焦躁',
  '比赛中盘令出走策略是先马的赛马娘焦躁，使其略微容易疲劳',
  20087,
  1,
  UmaSkill.rarity_enum.normal,
  24,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_senko_otherself >= 1 && args.phase_random === 1,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
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
    [-0.01, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.RunningStyleOtherSelf,
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
    [2, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
  130,
  false,
  false,
);
