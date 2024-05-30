const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100221,
  'Fairy tale',
  'レース後半に好位置で競り合うと\n走ることに心を躍らせて\n速度を上げる',
  10022,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order >= 2 &&
      args.order_rate <= 40 &&
      args.blocked_side_continuetime >= 2,
    () => false,
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
