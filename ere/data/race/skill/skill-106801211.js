const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106801211,
  '爆風一閃！',
  '直線で速度がすごく上がる＜長距離＞',
  10680121,
  6,
  633,
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
    [4500, 0, 0],
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
