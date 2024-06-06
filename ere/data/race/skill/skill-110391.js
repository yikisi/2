const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110391,
  '快意刚劲',
  '在比赛中盘之后的上坡处位于队伍中间时，上完坡后优雅地展现怪力，提升速度',
  11039,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [
    (args) =>
      args.phase >= 1 &&
      args.slope === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    () => true,
  ],
  [(args) => args.slope === 0 || args.slope === 2, () => false],
  [5, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
