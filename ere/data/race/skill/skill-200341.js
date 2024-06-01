const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200341,
  '曲线侍酒师',
  '华丽地过弯，加速度提升 ',
  20034,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.all_corner_random === 1, () => false],
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
    [0.4, 0, 0],
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
  [60, 0],
  1,
  false,
);
