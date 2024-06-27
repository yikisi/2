const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210071,
  '想要与你一决胜负',
  '赛程后半若位于前方则速度提高，加速度稍微提高，育成中积累的胜利次数越多，效果越好',
  21007,
  UmaSkill.rarity_enum.gold,
  10,
  633,
  [() => true, () => true],
  [
    (args) => args.distance_rate_after_random === 50 && args.order_rate <= 65,
    () => false,
  ],
  [1.2, 0],
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
      UmaSkill.ability_usage_enum.MultiplyFanCount,
      UmaSkill.ability_usage_enum.MultiplyFanCount,
      UmaSkill.ability_usage_enum.Direct,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.35, 0.2, 0],
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
