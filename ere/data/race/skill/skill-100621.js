const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100621,
  'どんっ、パッ、むんっ',
  'レース中間付近で中団にいるとき\n気合を入れ直して持久力を回復し\nさらに速度を少し上げる',
  10062,
  4,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.phase === 1 &&
      args.order >= 3 &&
      args.order_rate <= 70,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 2500, 0],
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
  [1, 2],
  [30, 30],
  0,
);
