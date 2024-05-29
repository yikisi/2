const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200401,
  'バ群嫌い',
  '周りを囲まれると\n持久力が少し減少する',
  20040,
  1,
  4,
  -262,
  [() => true, () => true],
  [(args) => args.accumulatetime >= 2 && args.is_surrounded === 1, () => true],
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
    [-200, 0, 0],
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
