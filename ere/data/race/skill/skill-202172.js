const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202172,
  '下坡巧者',
  '在下坡略微提高速度',
  20217,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.down_slope_random === 1, () => false],
  [2.4, 0],
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
