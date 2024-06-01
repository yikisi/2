const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201702,
  '倾其所有',
  '在终盘的最终直线若处于好位置，则稍微提升速度＜中距离＞',
  20170,
  1,
  2,
  217,
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
  [1, 0],
  [20, 0],
  1,
  false,
);
