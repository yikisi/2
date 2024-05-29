const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110161,
  '灰色の臨界点',
  '終盤の最終コーナー後半に先団にいると\n速度が上がる、長距離レースかつ中盤に\n競り合っていた場合はものすごく上がる',
  11016,
  5,
  340,
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 40,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 40,
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
    [5500, 0, 0],
    [3500, 0, 0],
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
