const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110611,
  '威震八方！特雷森应援团！！',
  '赛程前半，没有焦躁并处于最后方附近等待机会时，在最终直线会气势爆发，提高加速度',
  11061,
  UmaSkill.rarity_enum.spe_r,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate_out70_continue === 1 &&
      args.temptation_count === 0,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
  [4, 0],
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
  0,
  false,
);
