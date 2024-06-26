const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201512,
  '视线',
  '比赛的最终区域使自己紧盯的马娘紧张感上升一点点＜追马＞',
  20151,
  UmaSkill.rarity_enum.normal,
  3,
  217,
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
    [-0.15, 0, 0],
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
  [10, 10],
  1,
  180,
  false,
  false,
);
