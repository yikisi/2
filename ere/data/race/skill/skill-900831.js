const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900831,
  '任务：凯旋',
  '在比赛中段附近往后的直线处位于队伍中间时，稍微提升速度，若此时为下坡则稍微持续提升速度',
  90083,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.slope === 2 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [3.6, 3],
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
);
