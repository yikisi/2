const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110831,
  'Immortal Work',
  'レース中間地点で中団にいると最終直線\nで速度が上がる、中山レース場の\n中距離レースならものすごく上がる',
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
);
