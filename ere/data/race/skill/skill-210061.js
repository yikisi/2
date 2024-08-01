const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210061,
  '一番星',
  '赛程后半调整呼吸并向前迈进；育成中积累的胜利次数越多，速度、加速度、耐力回复量越高',
  21006,
  2,
  UmaSkill.rarity_enum.gold,
  17,
  633,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => false],
  [1.2, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.HpRate,
    ],
    [
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
  ],
  [
    [
      UmaSkill.ability_usage_enum.MultiplySingleModeWinCount,
      UmaSkill.ability_usage_enum.MultiplySingleModeWinCount,
      UmaSkill.ability_usage_enum.MultiplySingleModeWinCount,
    ],
    [
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
      UmaSkill.ability_usage_enum.Direct,
    ],
  ],
  [
    [0.25, 0.3, 0.035],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [1, 3],
  [30, 30],
  1,
  200,
  false,
  false,
);
