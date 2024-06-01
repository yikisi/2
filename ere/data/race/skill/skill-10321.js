const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10321,
  'introduction：My body',
  '在比赛后半且靠近弯道时，持久力少量恢复，且短时间内稍微提高速度',
  1032,
  3,
  17,
  240,
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
    [0.035, 0.15, 0],
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
  [30, 0],
  0,
  false,
);
