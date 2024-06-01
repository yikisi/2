const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202092,
  '斗争心',
  '比赛中盘，在中间集团竞争时，微幅恢复持久力，并稍微提升速度＜中距离＞',
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
