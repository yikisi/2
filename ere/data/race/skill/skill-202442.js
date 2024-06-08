const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202442,
  '投机之心',
  '比赛中极少情况下发挥更强的实力速度、力量、根性少量提升人气较低的情况下更容易触发',
  20244,
  UmaSkill.rarity_enum.normal,
  0,
  217,
  [() => true, () => true],
  [
    (args) => args.popularity <= 3 && args.random_lot <= 15,
    (args) => args.popularity >= 4 && args.random_lot <= 30,
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
    [40, 40, 40],
    [40, 40, 40],
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
  [15, 15],
  0,
  180,
  false,
  false,
);
