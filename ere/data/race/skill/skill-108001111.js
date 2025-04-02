const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108001111,
  '情报强者',
  '在比赛序盘发动多个技能时，提升加速度如果比赛为英里或中距离，则技能效果增加',
  10800111,
  1,
  UmaSkill.rarity_enum.evol,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 && args.activate_count_start >= 3) ||
      (args.distance_type === 3 && args.activate_count_start >= 3),
    (args) =>
      (args.distance_type === 1 && args.activate_count_start >= 3) ||
      (args.distance_type === 4 && args.activate_count_start >= 3),
  ],
  [3, 3],
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
  [3, 4, 2, 5],
  [UmaSkill.ability_tag_enum.accel],
);
