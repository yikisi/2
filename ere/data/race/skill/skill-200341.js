const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200341,
  '曲線のソムリエ',
  '華麗なコーナーワークで\n加速力が上がる',
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
);
