const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100251,
  '逐君之形',
  '赛程后半，从中间梯队追逐『友人』而逐渐提升速度使前方的马娘畏首畏尾',
  10025,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70,
    () => false,
  ],
  [6, 0],
  [500, 0],
  [
    [27, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [1, 9, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
