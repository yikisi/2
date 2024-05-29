const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110501,
  'Hephaistos',
  'レース終盤の最終コーナー後半で\n高みを目指して中団から速度を上げる',
  11050,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 75 &&
      args.order_rate >= 40,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
);
