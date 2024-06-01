const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100831,
  '任务：凯旋',
  '在比赛中段附近往后的直线处位于队伍中间时，提升速度，若此时为下坡则持续提升速度',
  10083,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.slope === 2 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
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
    [0.35, 0, 0],
    [0.35, 0, 0],
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
