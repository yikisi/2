const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900491,
  '会当凌绝顶，听我楚狂笑',
  '最终弯道之后准备超越前方马娘时将在剩余400m以后的好位置处稍微提高速度人气较低的时候速度提升稍多',
  90049,
  UmaSkill.rarity_enum.normal,
  2,
  180,
  [
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
  ],
  [
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity >= 4,
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity < 4,
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
