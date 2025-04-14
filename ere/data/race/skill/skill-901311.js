const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  901311,
  '¡Qué alegría!',
  '比赛中间位于中后方时短时间内稍微向前突进；若是短距离或英里比赛则之后最终冲刺时短时间内小幅向前突进',
  90131,
  1,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 40,
    (args) =>
      (args.distance_type === 1 &&
        args.is_activate_other_skill_detail === 1 &&
        args.phase === 3 &&
        args.is_lastspurt === 1) ||
      (args.distance_type === 2 &&
        args.is_activate_other_skill_detail === 1 &&
        args.phase === 3 &&
        args.is_lastspurt === 1),
  ],
  [1.8, 1.8],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
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
    [0.15, 0, 0],
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
  [3, 0],
  [15, 0],
  1,
  200,
  true,
  true,
  [2, 3],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
