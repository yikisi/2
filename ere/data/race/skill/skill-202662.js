const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202662,
  '热血涌动',
  '比赛终盘初段位于队伍中间时，稍微向前突进＜中距离/长距离＞',
  20266,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 30 &&
        args.order_rate <= 80) ||
      (args.distance_type === 4 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 30 &&
        args.order_rate <= 80),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [22, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
