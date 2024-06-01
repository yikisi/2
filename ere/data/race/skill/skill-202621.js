const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202621,
  '陷阵之志',
  '临近比赛终盘时位于中后方，则提升速度＜作战・居中＞',
  20262,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_laterhalf_random === 1 &&
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
