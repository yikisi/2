const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200391,
  '坂苦手',
  '上り坂で少し\n疲れてしまいがちになる',
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
