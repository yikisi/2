const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200361,
  'ハヤテ一文字',
  '直線で速度が上がる',
  20036,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.straight_random === 1, () => true],
  [3, 0],
  [30, 0],
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
