const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100651,
  '燃起来燃起来气氛炒起来！',
  '在临近终盘的某处位于前方时速度少量提升，若是短距离或英里比赛，则速度少量持续提升',
  10065,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50) ||
      (args.distance_type === 2 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50),
    (args) =>
      (args.distance_type === 3 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50) ||
      (args.distance_type === 4 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50),
  ],
  [6, 5],
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
    [0.25, 0, 0],
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
