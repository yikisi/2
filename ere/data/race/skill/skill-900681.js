const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900681,
  '胜利呐喊Wasshoi！',
  '位于先头集团时，在比赛后半的第三弯道处会略微加快速度。或者，在终盘身处看台对面时会更有力地向前迈进。',
  90068,
  UmaSkill.rarity_enum.normal,
  2,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 2 && args.straight_front_type === 2 && args.order <= 2,
    (args) => args.distance_rate >= 50 && args.corner === 3 && args.order <= 2,
  ],
  [3, 3],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.Accel,
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
    [0.05, 0.1, 0],
    [0.05, 0, 0],
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
  [1, 3],
  [7, 7],
  1,
  false,
);
