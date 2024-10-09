const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200164,
  '坏马场之鬼',
  '擅长「稍重」「重」「不良」的马场状态，速度与力量上升',
  20016,
  4,
  UmaSkill.rarity_enum.gold,
  1,
  461,
  [() => true, () => true],
  [
    (args) =>
      args.ground_condition === 2 ||
      args.ground_condition === 3 ||
      args.ground_condition === 4,
    () => false,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Power,
      UmaSkill.ability_type_enum.Speed,
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
    [60, 60, 0],
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
  [30, 30],
  0,
  130,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.speed, UmaSkill.ability_tag_enum.power],
);
