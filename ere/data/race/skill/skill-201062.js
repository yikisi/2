const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201062,
  '爆发力',
  '在比赛后半完成超越时，加速力稍微提升＜英里＞',
  20106,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.distance_rate >= 50 &&
      args.change_order_onetime < 0,
    () => false,
  ],
  [3, 0],
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
