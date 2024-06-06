const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110021,
  '向海平线的彼端',
  '进入终盘处于领头位置时稍微向前突进，若此时为第三弯道并且中盘拉开巨大差距领先时，迅速向前突进',
  11002,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [
    (args) =>
      args.phase === 1 && args.bashin_diff_behind >= 3 && args.order === 1,
    () => true,
  ],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.corner === 3 &&
      args.order === 1,
    (args) =>
      args.distance_rate >= 66 && args.distance_rate <= 68 && args.order === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.45, 0, 0],
    [0.25, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  false,
);
