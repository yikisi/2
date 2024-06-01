const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200501,
  '赛道魔术师',
  '比赛终盘容易取得好路线',
  20050,
  2,
  10,
  334,
  [() => true, () => true],
  [(args) => args.phase_random === 2, () => false],
  [3, 0],
  [500, 0],
  [
    [28, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.035, 0, 0],
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
  [60, 0],
  1,
  false,
);
