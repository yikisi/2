const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200351,
  '圆弧大师',
  '完美过弯，持久力回复',
  20035,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.corner_random === 1 ||
      args.corner_random === 2 ||
      args.corner_random === 3 ||
      args.corner_random === 4,
    () => false,
  ],
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
