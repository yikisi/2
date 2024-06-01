const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200152,
  '好马场○',
  '稍微擅长「良」的马场状态',
  20015,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.ground_condition === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [3, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 0, 0],
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
  [30, 0],
  0,
  false,
);
