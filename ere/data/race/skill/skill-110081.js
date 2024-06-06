const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110081,
  'Into High Gear!',
  '比赛进入中盘之后在下坡时位于中间集团，则下完坡后在短时间内速度提升，如果位于东京竞马场则再次推高档位',
  11008,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80 &&
      args.track_id === 10006,
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80,
  ],
  [
    (args) => args.slope === 0 || args.slope === 1,
    (args) => args.slope === 0 || args.slope === 1,
  ],
  [5, 4],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
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
    [0.35, 0.1, 0],
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
