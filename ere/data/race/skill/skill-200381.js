const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200381,
  '好转一息',
  '身处比赛中盘的直线时，恢复持久力',
  20038,
  2,
  9,
  508,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.corner === 0, () => false],
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
    [0.055, 0, 0],
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
  [60, 0],
  1,
  false,
);
