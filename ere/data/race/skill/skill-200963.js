const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200963,
  '紫電一閃',
  '直線で速度が上がる＜短距離＞',
  20096,
  2,
  10,
  508,
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
