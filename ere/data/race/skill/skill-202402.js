const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202402,
  '越级',
  '比赛终盘在后方准备超越时，稍微提升加速度',
  20240,
  1,
  16,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase >= 2 &&
        args.order_rate >= 50 &&
        args.is_overtake === 1) ||
      (args.distance_type === 2 &&
        args.phase >= 2 &&
        args.order_rate >= 50 &&
        args.is_overtake === 1),
    () => false,
  ],
  [2, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.no,
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
    [0.2, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
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
  [20, 0],
  1,
  180,
  false,
  false,
  [2, 3],
  [UmaSkill.ability_tag_enum.accel],
);
