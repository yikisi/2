const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201261,
  '第六感',
  '在比赛序盘，不容易被包围＜逃马＞',
  20126,
  UmaSkill.rarity_enum.gold,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 1 &&
        args.phase === 0 &&
        args.blocked_front_continuetime >= 1) ||
      (args.running_style === 1 &&
        args.phase === 0 &&
        args.blocked_side_continuetime >= 1),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.LaneMoveSpeed,
      UmaSkill.ability_type_enum.TargetLane,
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
    [0.035, 0.5, 0],
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
  [3, 0],
  [60, 0],
  1,
  110,
  false,
  false,
);
