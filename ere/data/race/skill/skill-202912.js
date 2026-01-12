const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202912,
  '瓦解',
  '最终弯道处若位于后方，则令前后各3人的速度极小幅下降，并稍微提升自己的速度',
  20291,
  1,
  16,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.order_rate >= 50 &&
      args.is_finalcorner_random === 1,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.CurrentSpeed,
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [0.15, -0.035, -0.035],
    [0, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.SelfInfront,
      UmaSkill.target_type_enum.SelfBehind,
    ],
    [
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
      UmaSkill.target_type_enum.no,
    ],
  ],
  [
    [0, 3, 3],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  1,
  190,
  false,
  false,
  [9],
  [
    UmaSkill.ability_tag_enum.currentSpeed,
    UmaSkill.ability_tag_enum.targetSpeed,
  ],
);
