const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202722,
  '折れない心',
  'レース中盤のコーナーで\nしばらくの間速度がちょっと上がる',
  20272,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.phase_corner_random === 1, () => false],
  [4, 0],
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
    [0.05, 0, 0],
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
);
