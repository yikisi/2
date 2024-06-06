const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110741,
  '华灯为君绽',
  '中盘位于队伍中间时稍微放慢速度并回复大量体力，当耐力有十二分充足时，之后在终盘会长时间持续向前突击',
  11074,
  UmaSkill.rarity_enum.spe_r,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 && args.order_rate >= 40 && args.order_rate <= 80,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.base_stamina >= 1200 &&
      args.phase >= 2,
  ],
  [1.2, 8],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [0.075, -0.15, 0],
    [0.15, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [2, 3],
  [30, 30],
  0,
  true,
);
