const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900361,
  'trigger:BEAT',
  '最终弯道之后若处于队伍中部靠近内埒的一侧则会在最终直线上略微提高速度略微容易取得好路线',
  90036,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 75 &&
      args.lane_type === 0,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
  [3, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.15, 0.015, 0],
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
  [1, 3],
  [7, 7],
  1,
  200,
  false,
  true,
);
