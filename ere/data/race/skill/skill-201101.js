const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201101,
  '中距離直線◎',
  '直線で速度が少し上がる＜中距離＞',
  20110,
  1,
  2,
  262,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.straight_random === 1,
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
);
