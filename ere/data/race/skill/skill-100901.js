const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100901,
  "Queen's Rebirth",
  '比赛前半段的弯道位于前方时，短时间内速度提升；若是英里或中距离比赛则在之后终盘的最终直线被后方逼近时较短时间内小幅向前突进',
  10090,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.ground_type === 1,
    (args) =>
      (args.is_activate_other_skill_detail === 1 &&
        args.phase >= 2 &&
        args.is_last_straight === 1 &&
        args.overtake_target_time >= 1 &&
        args.distance_type === 2) ||
      (args.is_activate_other_skill_detail === 1 &&
        args.phase >= 2 &&
        args.is_last_straight === 1 &&
        args.overtake_target_time >= 1 &&
        args.distance_type === 3),
  ],
  [3, 4],
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
    [0.35, 0, 0],
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
  [1, 3],
  [30, 30],
  0,
  0,
  true,
  false,
  [0, 3, 4],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.targetSpeed,
  ],
);
