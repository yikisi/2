const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200401,
  '讨厌马群',
  '四周被包围的话，持久力少量减少',
  20040,
  1,
  4,
  -262,
  [() => true, () => true],
  [(args) => args.accumulatetime >= 2 && args.is_surrounded === 1, () => false],
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
  false,
);
