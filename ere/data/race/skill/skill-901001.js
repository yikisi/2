const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901001,
  'Never Say Never',
  '剩余300m时位于前方，则速度微量提升若在沙土比赛中与领头赛马娘距离较近时再略微向前突进',
  90100,
  UmaSkill.rarity_enum.normal,
  2,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 299 &&
      args.remain_distance <= 301 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40 &&
      args.distance_diff_top <= 5 &&
      args.ground_type === 2,
    (args) =>
      args.remain_distance >= 299 &&
      args.remain_distance <= 301 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
  ],
  [3, 3],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.05, 0.05, 0],
    [0.05, 0, 0],
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
  [1, 3],
  [7, 7],
  1,
  false,
);
