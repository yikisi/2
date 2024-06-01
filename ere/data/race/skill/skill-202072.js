const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202072,
  '我行我素',
  '刚进入比赛中盘时若位于队伍中间会略微减慢速度稍微回复持久力＜长距离＞',
  20207,
  1,
  1,
  217,
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
    [0.035, -0.15, 0],
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
  [20, 0],
  1,
  false,
);
