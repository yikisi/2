const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101191,
  '『敬请，一路顺风』',
  '进入终盘时，若在后方且距离终点较远，则在短时间内向前冲刺，若是中山、阪神赛道的中、长距离比赛，更会在之后的直线上短暂猛烈冲刺。',
  10119,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.order_rate >= 50 &&
      args.remain_distance >= 500,
    (args) =>
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10005 &&
        args.distance_type === 3) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10005 &&
        args.distance_type === 4) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10009 &&
        args.distance_type === 3) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.corner === 0 &&
        args.track_id === 10009 &&
        args.distance_type === 4),
  ],
  [3, 3],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.no,
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
    [0.25, 0, 0],
    [0.45, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  true,
  false,
);
