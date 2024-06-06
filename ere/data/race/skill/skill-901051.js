const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901051,
  '终达群星',
  '在比赛中段左右处在中间集团，速度稍微提升，若是中距离比赛，且至此为止发动过7次技能，则速度会稍稍提高',
  90105,
  UmaSkill.rarity_enum.normal,
  2,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type === 3 &&
      args.activate_count_all >= 7,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [3, 3],
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
    [0.25, 0, 0],
    [0.15, 0, 0],
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
  [15, 0],
  1,
  false,
);
