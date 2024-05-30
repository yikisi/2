const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200372,
  '直線加速',
  '直線で加速力がわずかに上がる',
  20037,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.straight_random === 1, () => false],
  [3, 0],
  [30, 0],
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
