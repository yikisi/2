const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200961,
  '短距離直線◎',
  '直線で速度が少し上がる＜短距離＞',
  20096,
  1,
  2,
  262,
  [() => true, () => true],
  [
    (args) => args.distance_type === 1 && args.straight_random === 1,
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
