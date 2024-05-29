const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100251,
  'アナタヲ・オイカケテ',
  'レース後半に中団から\n『お友達』を追って速度を少しずつ上げ\n前方のウマ娘をちょっと萎縮させる',
  10025,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70,
    () => true,
  ],
  [6, 0],
  [500, 0],
  [
    [27, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [1, 9, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
