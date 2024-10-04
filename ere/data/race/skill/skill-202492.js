const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202492,
  '凌厉攻势',
  '冲进终盘之前一直保持冷静在后方等待机会的话，在终盘一开始会稍微提升加速度',
  20249,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  217,
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.order_rate_out50_continue === 1 &&
      args.temptation_count === 0,
    () => true,
  ],
  [
    (args) => args.running_style === 4 && args.phase_firsthalf_random === 2,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
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
    [0.2, 0, 0],
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
  [20, 0],
  1,
  180,
  false,
  false,
  [9],
  [UmaSkill.ability_tag_enum.accel],
);
