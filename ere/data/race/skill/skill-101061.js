const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101061,
  'Bang☆ミラクるわせ！',
  '最終コーナー後半で中団にいると速度を\n少し上げ続ける、さらに長距離レースで\n人気が低い場合すごく上げ続ける',
  10106,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.popularity >= 4,
    (args) =>
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.is_finalcorner_laterhalf === 1,
  ],
  [6, 6],
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
    [0.25, 0, 0],
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
