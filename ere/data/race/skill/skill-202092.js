const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202092,
  '闘争心',
  'レース中盤に中団で競り合うと\n持久力がちょっと回復し\nさらに速度がわずかに上がる＜中距離＞',
  20209,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase === 1 &&
      args.order_rate <= 80 &&
      args.order_rate >= 30 &&
      args.blocked_side_continuetime >= 2,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.005, 0],
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
  [10, 10],
  1,
  false,
);
