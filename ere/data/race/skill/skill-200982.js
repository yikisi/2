const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200982,
  '大幅度领先',
  '比赛中盘大幅度领跑时，略微容易保持领先＜短距离＞',
  20098,
  1,
  2,
  262,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase === 1 &&
      args.bashin_diff_behind >= 3 &&
      args.order === 1,
    () => false,
  ],
  [3, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
