const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901091,
  '心心相印×梦想未来',
  '在比赛前半段的弯道若位于队伍中间则略微提升速度，若是短距离或英里比赛则变为略微持续提升速度',
  90109,
  UmaSkill.rarity_enum.normal,
  2,
  180,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.distance_rate <= 50 &&
        args.corner !== 0 &&
        args.order >= 3 &&
        args.order_rate <= 70) ||
      (args.distance_type === 2 &&
        args.distance_rate <= 50 &&
        args.corner !== 0 &&
        args.order >= 3 &&
        args.order_rate <= 70),
    (args) =>
      args.distance_rate <= 50 &&
      args.corner !== 0 &&
      args.order >= 3 &&
      args.order_rate <= 70,
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
    [0.05, 0, 0],
    [0.05, 0, 0],
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
