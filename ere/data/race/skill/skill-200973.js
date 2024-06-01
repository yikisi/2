const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200973,
  '紫电圆刃',
  '弯道处速度提升＜短距离＞',
  20097,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.distance_type === 1 && args.all_corner_random === 1,
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
  false,
);
