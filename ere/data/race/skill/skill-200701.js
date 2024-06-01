const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200701,
  '豪脚',
  '比赛终盘位于后方时，赶超别人的能力会提升＜英里＞',
  20070,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
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
