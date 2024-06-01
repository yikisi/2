const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101021,
  '活泼乐章・飞驰',
  '比赛前半段在队伍中间且前方或后方长时间有赛马娘紧贴，则稍微回复体力之后在比赛中段附近的直线处短时间内速度大幅提升',
  10102,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_rate <= 50 &&
        args.order_rate >= 40 &&
        args.order_rate <= 80 &&
        args.infront_near_lane_time >= 3 &&
        args.accumulatetime >= 10) ||
      (args.distance_rate <= 50 &&
        args.order_rate >= 40 &&
        args.order_rate <= 80 &&
        args.behind_near_lane_time >= 3 &&
        args.accumulatetime >= 10),
    (args) =>
      args.distance_rate <= 60 &&
      args.distance_rate >= 45 &&
      args.corner === 0 &&
      args.is_activate_other_skill_detail === 1,
  ],
  [0, 4],
  [500, 500],
  [
    [9, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0, 0],
    [0.45, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
  true,
);
