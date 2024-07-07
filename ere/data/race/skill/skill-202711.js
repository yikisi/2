const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202711,
  '将军',
  '在终盘的最终弯道位于队伍中间往前时，若距离终点尚远则提升加速度＜先马/差马＞',
  20271,
  1,
  UmaSkill.rarity_enum.gold,
  17,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner !== 0 &&
        args.remain_distance >= 600 &&
        args.order_rate <= 70) ||
      (args.running_style === 3 &&
        args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner !== 0 &&
        args.remain_distance >= 600 &&
        args.order_rate <= 70),
    () => false,
  ],
  [0.9, 0],
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
    [0.4, 0, 0],
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
);
