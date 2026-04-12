// GENERATED START
const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  112101211,
  11210121,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase >= 2 &&
        args.is_overtake === 1 &&
        args.is_finalcorner === 1 &&
        args.corner !== 0) ||
      (args.distance_type === 2 &&
        args.phase >= 2 &&
        args.is_overtake === 1 &&
        args.is_finalcorner === 1 &&
        args.corner !== 0),
    (args) =>
      (args.distance_type === 1 && args.phase >= 2 && args.is_overtake === 1) ||
      (args.distance_type === 2 && args.phase >= 2 && args.is_overtake === 1),
  ],
  [2, 2],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.Accel,
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
    [0.5, 0, 0],
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
  0,
  false,
  false,
  [2, 3],
  [UmaSkill.ability_tag_enum.accel],
);
// GENERATED END
