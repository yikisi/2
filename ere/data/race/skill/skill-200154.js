const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200154,
  '良马场之鬼',
  '变得擅长「良」马场状态力量和速度上升',
  20015,
  2,
  8,
  461,
  [() => true, () => true],
  [(args) => args.ground_condition === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [3, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [60, 60, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  false,
);
