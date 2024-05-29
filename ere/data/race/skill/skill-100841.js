const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100841,
  '霹靂のアウフヘーベン',
  'レース終盤に後方にいると最終直線で\n力を解放し前に出る、東京レース場の\n中距離レースならものすごく前に出る',
  10084,
  5,
  18,
  340,
  [
    (args) => args.phase >= 2 && args.order_rate >= 50,
    (args) => args.phase >= 2 && args.order_rate >= 50,
  ],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.track_id === 10006 &&
      args.distance_type === 3,
    (args) => args.is_last_straight === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [22, 0, 0],
    [22, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
);
