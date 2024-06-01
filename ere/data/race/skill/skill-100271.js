const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100271,
  '成长吧我的肌肉！',
  '在比赛终盘的弯道中想要冲向前列时，提升加速度',
  10027,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.order_rate >= 65 &&
      args.order_rate <= 70,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  0,
  false,
);
