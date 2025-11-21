const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  204001,
  '气贯长虹',
  '在比赛序盘或者中盘被对手超越或者进行过竞争则向前突进',
  20400,
  2,
  17,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.phase <= 1 &&
        args.change_order_onetime > 0 &&
        args.accumulatetime >= 5) ||
      (args.running_style === 2 &&
        args.phase <= 1 &&
        args.blocked_side_continuetime >= 2 &&
        args.accumulatetime >= 5),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.CurrentSpeedWithNaturalDeceleration,
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
    [0.35, 0, 0],
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
  1,
  180,
  false,
  false,
  [7],
  [UmaSkill.ability_tag_enum.currentSpeed],
);
