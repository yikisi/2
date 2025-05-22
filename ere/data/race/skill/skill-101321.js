const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101321,
  'Circulating Love♡',
  '临近终盘的某个位置时速度稍微加快，中距离比赛时会根据对训练员的爱，最多增加3倍效果',
  10132,
  1,
  18,
  340,
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 3 &&
      args.ground_type === 1,
    () => true,
  ],
  [
    (args) => args.phase_laterhalf_random === 1,
    (args) =>
      args.running_style === 3 &&
      args.ground_type === 1 &&
      args.phase_laterhalf_random === 1,
  ],
  [5, 5],
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
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
  ],
  [
    [
      UmaSkill.ability_usage_enum.Love,
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
  [60, 0],
  0,
  0,
  false,
  false,
  [0, 8],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
