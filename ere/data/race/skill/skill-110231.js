const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110231,
  'Presents from X',
  'スタート後からレース後半まで\n好位置を維持し続けるとレース中盤に\n勝利への道筋を見出し速度を上げる',
  11023,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order_rate_in50_continue === 1 &&
      args.phase === 1 &&
      args.distance_rate >= 50 &&
      args.order >= 2 &&
      args.order_rate <= 40,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
);
