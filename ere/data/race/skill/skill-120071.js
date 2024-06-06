const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120071,
  'Vive la GOLD',
  '中距离或长距离比赛的最终弯道往后，在后方准备超越对手时速度提升，如果出闸时起跑慢了，变为速度大幅提升',
  12007,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50 &&
        args.is_badstart === 1) ||
      (args.distance_type === 4 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50 &&
        args.is_badstart === 1),
    (args) =>
      (args.distance_type === 3 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50) ||
      (args.distance_type === 4 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50),
  ],
  [5, 5],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
