const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900311,
  '充能完毕！全速前进！',
  '剩余300m左右处于前方的话略微提高速度，若刚好上完坡则速度稍微提高',
  90031,
  1,
  UmaSkill.rarity_enum.normal,
  16,
  180,
  [
    (args) =>
      args.remain_distance <= 305 &&
      args.remain_distance >= 300 &&
      args.slope === 1,
    () => true,
  ],
  [
    (args) =>
      (args.remain_distance <= 299 &&
        args.remain_distance >= 295 &&
        args.order <= 2 &&
        args.slope === 0) ||
      (args.remain_distance <= 299 &&
        args.remain_distance >= 295 &&
        args.order <= 2 &&
        args.slope === 2),
    (args) =>
      args.remain_distance <= 299 &&
      args.remain_distance >= 295 &&
      args.order <= 2,
  ],
  [3, 3],
  [500, 500],
  [
    [
      UmaSkill.ability_type_enum.TargetSpeed,
      UmaSkill.ability_type_enum.no,
      UmaSkill.ability_type_enum.no,
    ],
    [
      UmaSkill.ability_type_enum.TargetSpeed,
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
    [0.25, 0, 0],
    [0.05, 0, 0],
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
  [15, 0],
  1,
  200,
  false,
  true,
);
