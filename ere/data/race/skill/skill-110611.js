const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110611,
  '威震八方！特雷森应援团！！',
  '赛程前半，没有焦躁并处于最后方附近等待机会时，在最终直线会气势爆发，提高加速度',
  11061,
  5,
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
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
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
