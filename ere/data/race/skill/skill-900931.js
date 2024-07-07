const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900931,
  '幸福的湛蓝光芒',
  '终盘初段的某处位于前方时，略微向前突进，若是短距离或英里比赛，则提升技能效果',
  90093,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20) ||
      (args.distance_type === 2 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20),
    (args) =>
      (args.distance_type === 3 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20) ||
      (args.distance_type === 4 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate <= 50 &&
        args.order_rate >= 20),
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
    [0.15, 0, 0],
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
  [3, 0],
  [15, 0],
  1,
  200,
  false,
  true,
);
