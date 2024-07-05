const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  102041,
  '牢不可破的城堡',
  '终盘初始段位于前方时，向前突进大幅提高加速力，若是擅长的距离还会进一步提高速度',
  10204,
  5,
  UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.spe,
  ),
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase_firstquarter_random === 2 &&
      args.order_rate <= 40 &&
      args.distance_type >= 3,
    (args) => args.phase_firstquarter_random === 2 && args.order_rate <= 40,
  ],
  [6, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [0.4, 0.25, 0],
    [0.4, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.Self,
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
  [1, 0],
  [40, 0],
  0,
  0,
  false,
  false,
);
