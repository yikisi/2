const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100661,
  '引擎全开！大喷射！',
  '中盘中段处于领头位置时，超长时间内速度持续稍微上升，但终盘末段时会微幅逆喷射',
  10066,
  1,
  UmaSkill.rarity_enum.spe_n_3,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 34 &&
      args.distance_rate <= 36 &&
      args.order === 1 &&
      args.bashin_diff_behind >= 1,
    (args) => args.phase === 3 && args.is_activate_other_skill_detail === 1,
  ],
  [13, 500],
  [500, 500],
  [
    UmaSkill.ability_time_usage_enum.normal,
    UmaSkill.ability_time_usage_enum.normal,
  ],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.CurrentSpeed,
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
    [0.15, 0, 0],
    [-0.05, 0, 0],
  ],
  [
    [
      UmaSkill.target_type_enum.Self,
      UmaSkill.target_type_enum.no,
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
  [60, 0],
  0,
  0,
  true,
  false,
);
