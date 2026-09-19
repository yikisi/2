// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202442,
  20244,
  1,
  0,
  217,
  [() => true, () => true],
  [
    (args) => args.popularity >= 4 && args.random_lot_shared <= 30,
    (args) => args.popularity <= 3 && args.random_lot_shared <= 15,
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
  [],
  [
    UmaSkill.ability_tag_enum.speed,
    UmaSkill.ability_tag_enum.power,
    UmaSkill.ability_tag_enum.guts,
  ],
);
// GENERATED END
