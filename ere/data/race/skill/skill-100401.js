const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100401,
  'KEEP IT REAL.',
  'レース後半に中団から仕掛け始める時に\n持てるパフォーマンスを発揮して\n速度を少し上げ続ける',
  10040,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.is_overtake === 1,
    () => false,
  ],
  [6, 0],
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
    [0.25, 0, 0],
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
