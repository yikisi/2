const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  111091,
  '永远闪耀下去',
  '若是三宝冠的赛道则在终盘的弯道短时间内小幅向前突进；如果此时为下坡，则额外稍微提升加速度',
  11109,
  1,
  18,
  340,
  [
    (args) =>
      (args.track_id === 10009 && args.course_distance === 1600) ||
      (args.track_id === 10008 && args.course_distance === 2000) ||
      (args.track_id === 10006 && args.course_distance === 2400),
    (args) =>
      (args.track_id === 10009 && args.course_distance === 1600) ||
      (args.track_id === 10008 && args.course_distance === 2000) ||
      (args.track_id === 10006 && args.course_distance === 2400),
  ],
  [
    (args) =>
      args.ground_type === 1 &&
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.slope === 2,
    (args) => args.ground_type === 1 && args.phase >= 2 && args.corner !== 0,
  ],
  [4, 4],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
      UmaSkill.ability_type_enum.Accel,
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
    [0.25, 0.2, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [0],
  [UmaSkill.ability_tag_enum.currentSpeed, UmaSkill.ability_tag_enum.accel],
);
