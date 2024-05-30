const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200521,
  '空回り',
  '先頭で大きくリードし過ぎると\n少し疲れてしまいがちになる',
  20052,
  1,
  4,
  -262,
  [() => true, () => true],
  [
    (args) =>
      args.accumulatetime >= 2 &&
      args.order === 1 &&
      args.bashin_diff_behind >= 1,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.02, 0, 0],
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
  [2, 0],
  [-30, 0],
  1,
);
