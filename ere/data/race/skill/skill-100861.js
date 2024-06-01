const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100861,
  '消融在爱中吧',
  '剩余1000m时若位于前方，则提高速度',
  10086,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 999 &&
      args.remain_distance <= 1001 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
    () => false,
  ],
  [5, 0],
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
  0,
  false,
);
