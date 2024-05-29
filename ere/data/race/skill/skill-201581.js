const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201581,
  '登山家',
  '上り坂で加速力がわずかに上がる',
  20158,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.up_slope_random === 1, () => true],
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
);
