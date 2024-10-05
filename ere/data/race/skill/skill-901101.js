const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901101,
  'Guiding Sea',
  '比赛剩余800m处若位于队伍中间，则极小幅向前突进并提高极少加速力；若在根干距离（400的倍数）的比赛且位于后方，则额外极小幅提高加速力',
  90110,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.is_basis_distance === 1 &&
      args.order_rate >= 70 &&
      args.order_rate <= 80,
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80,
  ],
  [2.4, 2.4],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.Accel,
    ],
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.Accel,
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
    [0.05, 0.05, 0.07],
    [0.05, 0.05, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [15, 0],
  1,
  200,
  false,
  true,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed, UmaSkill.ability_tag_enum.accel],
);
