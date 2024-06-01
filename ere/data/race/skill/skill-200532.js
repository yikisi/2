const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200532,
  '先驱',
  '比赛初期略微容易获得领先＜作战・领放＞',
  20053,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 1 && args.phase === 0, () => false],
  [1.2, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
