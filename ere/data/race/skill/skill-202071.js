const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202071,
  '泰然自若',
  '刚进入比赛中盘时若位于队伍中间会略微减慢速度并回复大量持久力＜长距离＞',
  20207,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase_firsthalf_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    [9, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.075, -0.15, 0],
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
