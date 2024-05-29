const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101001,
  'Never Say Never',
  '残り300m地点で前の方にいると速度を\n少し上げる、ダートレースで先頭の\nウマ娘と近いとさらに少し前に出る',
  10100,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 299 &&
      args.remain_distance <= 301 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40 &&
      args.distance_diff_top <= 5 &&
      args.ground_type === 2,
    (args) =>
      args.remain_distance >= 299 &&
      args.remain_distance <= 301 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 22, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 2500, 0],
    [2500, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
