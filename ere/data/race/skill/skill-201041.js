const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201041,
  'マイルコーナー◎',
  'コーナーで速度が少し上がる\n＜マイル＞',
  20104,
  1,
  4,
  262,
  [() => true, () => true],
  [
    (args) => args.distance_type === 2 && args.all_corner_random === 1,
    () => true,
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
    [2500, 0, 0],
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
);
