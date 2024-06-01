const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202091,
  '气势汹汹',
  '比赛中盘，在中间集团竞争时，小幅恢复持久力，并提升速度＜中距离＞',
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
