const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110621,
  'ごろりん！？パワードライブ',
  'レース後半のコーナーで中団にいると\n残り持久力に応じた時間\n速度が少し上がる、中距離レースでは\nさらに加速力もちょっと上がる',
  11062,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type === 3,
    (args) =>
      args.distance_rate >= 50 &&
      args.corner !== 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [2, 2],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.1, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  false,
);
