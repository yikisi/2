const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100571,
  '旅途尽头的抒情诗',
  '比赛即将进入终盘时的某刻位于后方时，速度持续上升。若是在中长距离比赛中，距离领先位置越远则效果越强',
  10057,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50) ||
      (args.distance_type === 4 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50),
    (args) =>
      (args.distance_type === 1 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50) ||
      (args.distance_type === 2 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50),
  ],
  [6, 6],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [19, 1, 1],
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
