const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106701111,
  '金刚不坏',
  '临近比赛中盘时若身处中间集团以后，回复持久力，并且稍微提升速度＜作战・居中＞',
  10670111,
  6,
  25,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate >= 40,
    () => false,
  ],
  [3, 0],
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
    [0.055, 0.15, 0],
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
  1,
  false,
);
