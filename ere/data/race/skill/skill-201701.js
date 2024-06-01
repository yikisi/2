const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201701,
  '决死之心',
  '在终盘的最终直线若处于好位置，则提升速度＜中距离＞',
  20170,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.is_last_straight === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 60 &&
      args.phase >= 2,
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
