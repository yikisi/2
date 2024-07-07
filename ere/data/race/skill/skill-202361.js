const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202361,
  '大意就会败北',
  '比赛后半时，使体力回复的赛马娘畏缩＜泥地＞',
  20236,
  2,
  UmaSkill.rarity_enum.gold,
  25,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.distance_rate >= 50 &&
      args.is_other_character_activate_advantage_skill === 9,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [-0.25, 0, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.ActivateHealSkill,
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
    [1, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [30, 30],
  1,
  180,
  false,
  false,
);
