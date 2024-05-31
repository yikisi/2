const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110291,
  'いっぱいおあげんしぇ！',
  'レース中間付近で前の方から\n仕掛け始める時に少しの間速度が上がる\nマイルレースなら効果が増える',
  11029,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.is_overtake === 1 &&
      args.distance_type === 2,
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.is_overtake === 1,
  ],
  [4, 4],
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
