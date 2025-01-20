const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900791,
  '『船桥最强！』',
  '比赛中盘若在前方竞争，则比赛后半段短时间内速度稍微提升；若是大井、川崎或者船桥赛场，则变为速度持续稍微提升',
  90079,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [
    (args) =>
      args.phase === 1 &&
      args.order_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
    (args) =>
      args.phase === 1 &&
      args.order_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
  ],
  [
    (args) =>
      (args.distance_rate >= 50 && args.track_id === 10101) ||
      (args.distance_rate >= 50 && args.track_id === 10103) ||
      (args.distance_rate >= 50 && args.track_id === 10104),
    (args) => args.distance_rate >= 50,
  ],
  [3.6, 2.4],
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
    [0.15, 0, 0],
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
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
