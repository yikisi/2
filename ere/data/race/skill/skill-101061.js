const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101061,
  '砰☆奇迹天降！',
  '最终弯道后半部分位于队伍中间时，速度持续少量提升，且在长距离比赛低人气的情况下，速度持续大幅提升',
  10106,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.popularity >= 4,
    (args) =>
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.is_finalcorner_laterhalf === 1,
  ],
  [6, 6],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
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
  [1, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [5],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
