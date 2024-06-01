const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202402,
  '越级',
  '比赛终盘在后方准备超越时，稍微提升加速度＜短距离/英里＞',
  20240,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase >= 2 &&
        args.order_rate >= 50 &&
        args.is_overtake === 1) ||
      (args.distance_type === 2 &&
        args.phase >= 2 &&
        args.order_rate >= 50 &&
        args.is_overtake === 1),
    () => false,
  ],
  [2, 0],
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
    [0.2, 0, 0],
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
