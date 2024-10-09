const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  103202111,
  '拉普拉斯的恶魔',
  '速度有十二分迅速时大幅提升速度，智力也十二分超群时极大提升速度',
  10320211,
  1,
  UmaSkill.rarity_enum.evol,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 3 &&
      args.base_speed >= 1200 &&
      args.base_wiz >= 1200,
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 3 &&
      args.base_speed >= 1200 &&
      args.base_wiz < 1200,
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
    [100, 0, 0],
    [80, 0, 0],
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
  false,
  false,
  [4, 7],
  [UmaSkill.ability_tag_enum.speed],
);
