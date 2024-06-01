const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202041,
  '气势冲天',
  '临近终盘若位于前方的话提高速度＜短距离＞',
  20204,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
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
