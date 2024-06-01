const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201061,
  '马力全开！',
  '在比赛后半完成超越时，加速力提升＜英里＞',
  20106,
  2,
  10,
  508,
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
  1,
  false,
);
