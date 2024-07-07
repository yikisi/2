const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101001,
  'Never Say Never',
  '剩余300m时位于前方，则速度少量提升若在泥地比赛中与领头赛马娘距离较近时再稍微向前突进',
  10100,
  1,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
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
  [5, 5],
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
    [0.25, 0.25, 0],
    [0.25, 0, 0],
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
  [30, 30],
  0,
  0,
  false,
  false,
);
