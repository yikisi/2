const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202031,
  '赌徒',
  '比赛后半速度大幅上升但有时会很累',
  20203,
  2,
  10,
  334,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => false],
  [1.8, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 8, 1],
    [1, 1, 1],
  ],
  [
    [0.45, -1, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
