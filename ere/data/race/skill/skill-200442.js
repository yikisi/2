const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200442,
  '隐身蓑衣',
  '在比赛序盘或中盘前方堵塞时，保持坚定的意志稍微恢复持久力，并且路线选择稍微变得明智',
  20044,
  UmaSkill.rarity_enum.normal,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.phase <= 1 &&
      args.accumulatetime >= 5 &&
      args.blocked_front_continuetime >= 1,
    () => false,
  ],
  [2, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.LaneMoveSpeed,
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
    [0.015, 0.015, 0],
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
  [2, 0],
  [20, 0],
  1,
  160,
  false,
  false,
);
