const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900651,
  '燃起来燃起来气氛炒起来！',
  '在临近终盘的某处位于前方时速度略微提升，若是短距离或英里比赛，则速度略微持续提升',
  90065,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50) ||
      (args.distance_type === 2 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50),
    (args) =>
      (args.distance_type === 3 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50) ||
      (args.distance_type === 4 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50),
  ],
  [3.6, 3],
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
  [2, 3, 4, 5],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
