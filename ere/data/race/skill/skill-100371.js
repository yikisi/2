const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100371,
  'Schwarzes Schwert',
  '冷静にレースを運び最終直線で3番手\n以降だと速度が上がる、中団の位置取り\nを維持しているとすごく上がる',
  10037,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.temptation_count === 0 &&
      args.order >= 3 &&
      args.is_last_straight === 1 &&
      args.order_rate_in80_continue === 1 &&
      args.order_rate_out40_continue === 1,
    (args) =>
      args.temptation_count === 0 &&
      args.order >= 3 &&
      args.is_last_straight === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [4500, 0, 0],
    [3500, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
