const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108001211,
  '『未知』を求めて',
  'レース中盤が迫ったとき前方にいると\n速度がすごく上がる＜ダート＞',
  10800121,
  6,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate <= 50,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [4500, 0, 0],
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
);
