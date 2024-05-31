const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202091,
  '気炎万丈',
  'レース中盤に中団で競り合うと\n持久力が少し回復し\nさらに速度が上がる＜中距離＞',
  20209,
  2,
  10,
  508,
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
    [0.35, 0.035, 0],
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
  1,
  false,
);
