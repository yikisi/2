const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201173,
  '烈風一閃',
  '直線で速度が上がる＜長距離＞',
  20117,
  2,
  508,
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
    [3500, 0, 0],
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
