const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200552,
  '一逃到底',
  '最终弯道略微容易保持领先＜作战・领放＞',
  20055,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.is_finalcorner_random === 1 &&
      args.order === 1,
    () => false,
  ],
  [3, 0],
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
