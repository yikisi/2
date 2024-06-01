const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202352,
  '飞尘',
  '比赛序盘自己保持领先时，使跟在后方的赛马娘速度少量下降＜沙土＞',
  20235,
  1,
  3,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.accumulatetime >= 10 &&
      args.phase === 0 &&
      args.order <= 1 &&
      args.bashin_diff_behind <= 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.15, 0, 0],
    [0, 0, 0],
  ],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
  false,
);
