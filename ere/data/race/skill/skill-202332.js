const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202332,
  '擅长迈步',
  '力量十分强劲时速度稍微提升。力量有十二分强劲时，速度少量提升＜泥地＞',
  20233,
  1,
  UmaSkill.rarity_enum.normal,
  0,
  174,
  [() => true, () => true],
  [
    (args) => args.ground_type === 2 && args.base_power >= 1200,
    (args) =>
      args.ground_type === 2 &&
      args.base_power >= 1000 &&
      args.base_power < 1200,
  ],
  [-0.0001, -0.0001],
  [0, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Speed,
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
    [40, 0, 0],
    [20, 0, 0],
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
  [20, 0],
  0,
  120,
  false,
  false,
);
