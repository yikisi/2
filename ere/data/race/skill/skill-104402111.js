const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  104402111,
  '风灵魔法',
  '比赛终盘初段提升加速度，若是2200m比赛则消耗少量体力使加速度在终盘初段更早时间内大幅提升',
  10440211,
  1,
  19,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.course_distance === 2200 &&
      args.running_style === 4 &&
      args.phase_firstquarter_random === 2,
    (args) =>
      args.course_distance !== 2200 &&
      args.running_style === 4 &&
      args.phase_firsthalf_random === 2,
  ],
  [1.2, 1.2],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
      UmaSkill.ability_type_enum.HpRate,
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
    [0.5, -0.02, 0],
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
  [3, 0],
  [60, 0],
  1,
  0,
  false,
  false,
  [9],
  [UmaSkill.ability_tag_enum.hpRate, UmaSkill.ability_tag_enum.accel],
);
