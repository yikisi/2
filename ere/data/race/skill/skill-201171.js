const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201171,
  '長距離直線◎',
  '直線で速度が少し上がる＜長距離＞',
  20117,
  1,
  262,
  [() => true, () => true],
  [
    (args) => args.distance_type === 4 && args.straight_random === 1,
    () => true,
  ],
  [3, 0],
  [500, 500],
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
