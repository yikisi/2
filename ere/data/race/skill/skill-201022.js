const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201022,
  '禁止抢先',
  '比赛序盘处于后方的话，略微使前方的赛马娘焦躁和动作迟缓＜短距离＞',
  20102,
  1,
  UmaSkill.rarity_enum.normal,
  24,
  262,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 0 &&
      args.order_rate > 50 &&
      args.accumulatetime >= 5,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.HpRate,
      UmaSkill.ability_type_enum.Accel,
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
    [-0.01, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.SelfInfront,
      UmaSkill.target_type_enum.SelfInfront,
      UmaSkill.target_type_enum.no,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [18, 18, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
  170,
  false,
  false,
);
