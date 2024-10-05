const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101161,
  '烈华的洗礼',
  '比赛前半段的弯道时若在前方，则稍微提高速度；之后在终盘的最终直线时若在马群前方，则在短时间内大幅提高速度',
  10116,
  1,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 && args.corner !== 0 && args.order_rate <= 50,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.order_rate <= 40 &&
      args.phase >= 2 &&
      args.is_last_straight === 1,
  ],
  [5, 3],
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
    [0.25, 0, 0],
    [0.45, 0, 0],
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
  true,
  false,
  [],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
