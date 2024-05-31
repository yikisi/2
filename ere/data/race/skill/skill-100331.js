const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100331,
  'ディオスクロイの流星',
  '最終直線で先頭から離されていると\n星に導かれるように速度が上がる\n最後方付近にいる場合はすごく上がる',
  10033,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.distance_diff_top >= 5 &&
      args.order_rate < 80,
    (args) =>
      args.is_last_straight === 1 &&
      args.distance_diff_top >= 5 &&
      args.order_rate >= 80,
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
    [0.35, 0, 0],
    [0.45, 0, 0],
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
  false,
);
