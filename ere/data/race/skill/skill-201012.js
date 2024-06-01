const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201012,
  '钉死后方',
  '比赛序盘处于前方时令后方的赛马娘稍微萎缩＜短距离＞',
  20101,
  1,
  3,
  262,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 0 &&
      args.order_rate <= 50 &&
      args.accumulatetime >= 5,
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
    [-0.2, 0, 0],
    [0, 0, 0],
  ],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [15, 15],
  1,
  false,
);
