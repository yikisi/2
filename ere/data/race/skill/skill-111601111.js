const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  111601111,
  '――退下',
  '在距离2000m以上的比赛，终盘初段的初期前方拥挤时，加速度提升并更擅长回避；前方不拥挤时，在终盘初段的初期该技能依旧发动',
  11160111,
  1,
  19,
  461,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.course_distance >= 2000 &&
        args.infront_near_lane_time >= 1 &&
        args.phase_firstquarter === 2) ||
      (args.running_style === 2 &&
        args.course_distance >= 2000 &&
        args.phase_firstquarter_random === 2),
    () => false,
  ],
  [3, 0],
  [30, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.LaneMoveSpeed,
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
    [0.4, 0.025, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [3, 0],
  [60, 0],
  1,
  0,
  false,
  false,
  [7],
  [UmaSkill.ability_tag_enum.laneMove, UmaSkill.ability_tag_enum.accel],
);
