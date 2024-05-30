const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201113,
  '光芒円刃',
  'コーナーで速度が上がる＜中距離＞',
  20111,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.all_corner_random === 1,
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
);
