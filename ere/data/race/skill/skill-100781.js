const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100781,
  '風光る',
  'レース前半で控え、最終コーナー後半に\n前の方だと長時間加速力をちょっと上げ\n続ける、2番手なら効果が上がる',
  10078,
  5,
  18,
  340,
  [
    (args) => args.distance_rate >= 50 && args.order_rate_out20_continue === 1,
    (args) => args.distance_rate >= 50 && args.order_rate_out20_continue === 1,
  ],
  [
    (args) =>
      args.is_finalcorner_laterhalf === 1 &&
      args.distance_diff_rate <= 50 &&
      args.order === 2,
    (args) =>
      args.is_finalcorner_laterhalf === 1 && args.distance_diff_rate <= 50,
  ],
  [8, 8],
  [500, 500],
  [
    [31, 0, 0],
    [31, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
    [0.1, 0, 0],
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
