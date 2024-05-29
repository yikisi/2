const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100011,
  'シューティングスター',
  'レース終盤に前の方で相手を抜くと\n勢いに乗って前に出て\nさらに加速力がちょっと上がる',
  10001,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.order >= 1 &&
      args.order_rate <= 50 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [22, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
);
