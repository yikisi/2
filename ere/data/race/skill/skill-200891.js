const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200891,
  '差马牵制',
  '比赛初盘对出走策略是差马的赛马娘进行牵制，使其略微容易疲劳',
  20089,
  1,
  UmaSkill.rarity_enum.normal,
  24,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_sashi_otherself >= 1 &&
      args.phase_random === 0 &&
      args.accumulatetime >= 5,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
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
    [3, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
  130,
  false,
  false,
);
