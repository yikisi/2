const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900591,
  '超越彼方……',
  '保持冷静进入中盘并准备发力时或是在终盘胜负关键的弯道位于中部梯队时，加速能力会略微提高',
  90059,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [() => true, () => true],
  [
    (args) =>
      (args.phase >= 2 &&
        args.corner !== 0 &&
        args.is_finalcorner === 0 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70) ||
      (args.phase === 1 &&
        args.corner !== 0 &&
        args.is_finalcorner === 1 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70),
    () => false,
  ],
  [2.4, 0],
  [500, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
);
