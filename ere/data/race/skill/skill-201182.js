const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201182,
  '長距離コーナー○',
  'コーナーで速度がわずかに上がる\n＜長距離＞',
  20118,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
  false,
);
