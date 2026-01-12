const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110411,
  'CHERRY☆飞天流',
  '比赛剩余400m处位于前三名，则短时间内略微提升加速度，在中盘竞争持续时间越长，则技能效果越好，技能持续时间越长',
  11041,
  1,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order <= 3 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399,
    () => false,
  ],
  [1, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.blocked_side_continuetime,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.Accel,
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
      UmaSkill.ability_usage_enum
        .MultiplyBlockedSideMaxContinueTimePhaseMiddleRun1,
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
    [0.1, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  0,
  false,
  false,
  [],
  [UmaSkill.ability_tag_enum.accel],
);
