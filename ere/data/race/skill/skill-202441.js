const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202441,
  '胜负师',
  '比赛中偶尔会发挥更强的实力速度、力量、根性大幅提升人气较低的情况下更容易触发',
  20244,
  2,
  UmaSkill.rarity_enum.gold,
  1,
  508,
  [() => true, () => true],
  [
    (args) => args.popularity <= 3 && args.random_lot <= 30,
    (args) => args.popularity >= 4 && args.random_lot <= 60,
  ],
  [-0.0001, -0.0001],
  [0, 0],
  [
    [
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.Power,
      UmaSkill.ability_type_enum.Guts,
    ],
    [
      UmaSkill.ability_type_enum.Speed,
      UmaSkill.ability_type_enum.Power,
      UmaSkill.ability_type_enum.Guts,
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
    [80, 80, 80],
    [80, 80, 80],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
    ],
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
    ],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  180,
  false,
  false,
);
