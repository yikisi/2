const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202501,
  '横冲直撞',
  '临近比赛终盘位于前方时，速度提升＜英里＞',
  20250,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate <= 50,
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
