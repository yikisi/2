const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110831,
  '不死不灭者',
  '比赛进行到一半位于队伍中间时，在最终直线处提升速度，如果是中山竞马场的中距离比赛，则变为极大提升速度',
  11083,
  5,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.track_id === 10005 &&
      args.distance_type === 3,
    (args) => args.is_last_straight === 1,
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
    [0.55, 0, 0],
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
