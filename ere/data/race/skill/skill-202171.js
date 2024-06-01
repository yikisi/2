const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202171,
  '至高的速降者',
  '在下坡提高速度',
  20217,
  2,
  10,
  508,
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
    [0.35, 0, 0],
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
