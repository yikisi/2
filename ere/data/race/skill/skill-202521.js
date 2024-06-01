const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202521,
  '天衣无缝',
  '在最终弯道前的第三弯道上位于后方时，向前突进＜中距离/长距离＞',
  20252,
  2,
  10,
  508,
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
  [3, 0],
  [60, 0],
  1,
  false,
);
