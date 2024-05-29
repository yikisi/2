const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101091,
  '繋ぐ・繋がる×夢・未来',
  'レース前半のコーナーで中団にいると\n速度を少し上げる、短距離かマイル\nレースの場合は少し上げ続ける',
  10109,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.distance_rate <= 50 &&
        args.corner !== 0 &&
        args.order >= 3 &&
        args.order_rate <= 70) ||
      (args.distance_type === 2 &&
        args.distance_rate <= 50 &&
        args.corner !== 0 &&
        args.order >= 3 &&
        args.order_rate <= 70),
    (args) =>
      args.distance_rate <= 50 &&
      args.corner !== 0 &&
      args.order >= 3 &&
      args.order_rate <= 70,
  ],
  [6, 5],
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
    [2500, 0, 0],
    [2500, 0, 0],
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
