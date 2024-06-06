const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110121,
  '大碗的爱！一生有口福！',
  '比赛中盘完成三次追赶，在临近终盘的下坡路位于后方时，短时间内速度提升并略微提升加速度',
  11012,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [(args) => args.change_order_up_middle >= 3, () => true],
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.slope === 2 &&
      args.order_rate >= 50,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.35, 0.1, 0],
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
  [1, 3],
  [30, 30],
  0,
  false,
);
