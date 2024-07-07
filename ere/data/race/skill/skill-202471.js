const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202471,
  '猛追',
  '比赛后半段进行追赶时，速度提升＜先马/差马＞',
  20247,
  2,
  UmaSkill.rarity_enum.gold,
  17,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.distance_rate >= 50 &&
        args.is_overtake === 1) ||
      (args.running_style === 3 &&
        args.distance_rate >= 50 &&
        args.is_overtake === 1),
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
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
    [0.35, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
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
  [1, 0],
  [60, 0],
  1,
  180,
  false,
  false,
);
