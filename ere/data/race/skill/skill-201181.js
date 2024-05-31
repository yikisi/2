const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201181,
  '長距離コーナー◎',
  'コーナーで速度が少し上がる\n＜長距離＞',
  20118,
  1,
  2,
  262,
  [() => true, () => true],
  [
    (args) => args.distance_type === 4 && args.all_corner_random === 1,
    () => false,
  ],
  [3, 0],
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
    [0.25, 0, 0],
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
  [30, 0],
  1,
  false,
);
