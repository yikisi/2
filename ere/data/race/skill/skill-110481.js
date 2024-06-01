const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110481,
  '我们辣妹，永远的姐妹♪',
  '在比赛中段前后位于队伍中间时速度少量持续上升，如果心情绝好调则效果提升',
  11048,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.motivation === 5,
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [6, 6],
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
    [0.3, 0, 0],
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
