const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100321,
  'U=ma2',
  '在比赛后半且靠近弯道时，持久力恢复，且短时间内稍微提高速度',
  10032,
  4,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order >= 3 &&
      args.order_rate <= 40,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.25, 0],
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
  [2, 0],
  [60, 0],
  0,
  false,
);
