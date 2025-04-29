const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101241,
  '膨发的梦想，先驱的道路',
  '比赛迫近终盘时若自身位于前方，则速度小幅提升。在赛程为1600m~2000m间的比赛中发动时，若自身位于最前方或距最前方选手4马身以内，则速度大幅提升',
  10124,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase_laterhalf_random === 1 &&
      args.order_rate <= 50 &&
      args.course_distance >= 1600 &&
      args.course_distance <= 2000 &&
      args.distance_diff_top <= 10,
    (args) => args.phase_laterhalf_random === 1 && args.order_rate <= 50,
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
    [0.45, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.targetSpeed],
);
