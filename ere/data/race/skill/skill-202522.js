const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202522,
  '打破常理',
  '在最终弯道前的第三弯道上位于后方时，稍微向前突进＜中距离/长距离＞',
  20252,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.corner_random === 3 &&
        args.order_rate >= 50) ||
      (args.distance_type === 4 &&
        args.corner_random === 3 &&
        args.order_rate >= 50),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [22, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
