const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110231,
  'Presents from X',
  '从起跑到比赛后半为止持续保持好位置的话，就会在比赛中盘找到通往胜利的道路，提高速度',
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
    () => false,
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
  false,
);
