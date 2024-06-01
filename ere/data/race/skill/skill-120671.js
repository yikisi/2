const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120671,
  '钻石桥',
  '临近终盘的某处位于队伍中间时速度少量提升，若是中距离比赛则提升技能效果',
  12067,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase_laterhalf_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type === 3,
    (args) =>
      args.phase_laterhalf_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type !== 3,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
