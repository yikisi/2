const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201511,
  '炙热视线',
  '比赛的最终区域使自己紧盯的马娘紧张感上升＜追马＞',
  20151,
  UmaSkill.rarity_enum.gold,
  11,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 && args.phase_random === 2 && args.order >= 2,
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
      UmaSkill.target_type_enum.Visible,
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
    [18, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [30, 30],
  1,
  180,
  false,
  false,
);
