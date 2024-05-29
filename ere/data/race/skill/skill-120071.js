const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120071,
  'Vive la GOLD',
  '中距離か長距離レースで最終コーナー\n以降に後方から追い抜こうとすると\n速度が上がる、スタート時に\n出遅れているとすごく上がる',
  12007,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50 &&
        args.is_badstart === 1) ||
      (args.distance_type === 4 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50 &&
        args.is_badstart === 1),
    (args) =>
      (args.distance_type === 3 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50) ||
      (args.distance_type === 4 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50),
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
    [0.45, 0, 0],
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
