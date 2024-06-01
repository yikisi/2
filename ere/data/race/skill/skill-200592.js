const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200592,
  '向前取位',
  '比赛中盘位于中团以后时，速度稍微提升＜作战・居中＞',
  20059,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 1 &&
      args.order_rate >= 40,
    () => false,
  ],
  [2.4, 0],
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
