const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200391,
  '不擅长坡道',
  '上坡时容易疲劳',
  20039,
  1,
  4,
  -262,
  [() => true, () => true],
  [(args) => args.up_slope_random === 1, () => false],
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
