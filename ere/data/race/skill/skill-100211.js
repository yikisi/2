const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100211,
  '见识一下白色闪电吧！',
  '比赛后半的直线处在好位置或者从集团中部瞄准前方的话就会如闪电一般冲刺',
  10021,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_rate >= 50 &&
        args.corner === 0 &&
        args.order_rate >= 70 &&
        args.order_rate <= 75 &&
        args.is_overtake === 1) ||
      (args.distance_rate >= 50 &&
        args.corner === 0 &&
        args.order_rate <= 30 &&
        args.order_rate >= 20),
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
