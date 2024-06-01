const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105101121,
  '绽放的勇气',
  '直线上速度大幅提升	',
  10510112,
  6,
  26,
  633,
  [() => true, () => true],
  [(args) => args.straight_random === 1, () => false],
  [3, 0],
  [30, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
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
  [60, 0],
  1,
  false,
);
