const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120611,
  '通往理想的曲折道路',
  '剩下600m时若在中间集团内从外线追赶，则于最后冲刺阶段当中持续加速',
  12061,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [
    (args) =>
      args.remain_distance <= 600 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.is_lastspurt === 1 && args.phase === 3, () => false],
  [6, 0],
  [500, 0],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
  [1, 0],
  [60, 0],
  0,
  false,
);
