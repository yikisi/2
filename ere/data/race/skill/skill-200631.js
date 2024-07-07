const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200631,
  '疾风怒涛',
  '在比赛终盘位于后方时，最后冲刺阶段的中段，速度提升＜追马＞',
  20063,
  2,
  UmaSkill.rarity_enum.gold,
  17,
  508,
  [(args) => args.phase === 2 && args.distance_diff_rate >= 50, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_firsthalf_random === 3 &&
      args.is_lastspurt === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
  180,
  false,
  false,
);
