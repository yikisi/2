const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108001211,
  '追寻『未知』',
  '临近中盘若位于前方，则大幅提升速度＜沙土＞',
  10800121,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate <= 50,
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
    [0.45, 0, 0],
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
