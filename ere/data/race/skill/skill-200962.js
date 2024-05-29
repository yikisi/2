const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200962,
  '短距離直線○',
  '直線で速度がわずかに上がる＜短距離＞',
  20096,
  1,
  4,
  217,
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
    [1500, 0, 0],
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
);
