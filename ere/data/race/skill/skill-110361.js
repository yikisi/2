const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110361,
  '...found you.',
  '終盤の最終コーナー後半以降に\n追い抜こうとすると速度が上がる\nレース中盤に中団で\n追い抜かれているとすごく上がる',
  11036,
  5,
  18,
  340,
  [
    (args) =>
      args.phase === 1 &&
      args.change_order_onetime > 0 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80,
    () => true,
  ],
  [
    (args) =>
      (args.phase >= 2 &&
        args.is_finalcorner_laterhalf === 1 &&
        args.is_overtake === 1) ||
      (args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner === 0 &&
        args.is_overtake === 1),
    (args) =>
      (args.phase >= 2 &&
        args.is_finalcorner_laterhalf === 1 &&
        args.is_overtake === 1) ||
      (args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner === 0 &&
        args.is_overtake === 1),
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
  false,
);
