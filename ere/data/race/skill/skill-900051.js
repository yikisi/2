const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900051,
  '闪耀煌星的演剧',
  '在比赛终盘位于前列并突围时，在距终点300米时稍微提升速度',
  90005,
  UmaSkill.rarity_enum.normal,
  2,
  180,
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate <= 40 &&
      args.behind_near_lane_time_set1 >= 1,
    () => true,
  ],
  [(args) => args.remain_distance <= 300, () => false],
  [3, 0],
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
    [0.25, 0, 0],
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
  [15, 0],
  1,
  false,
);
