const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100281,
  "I'M☆FULL☆SPEED!!",
  'レース中間に好位置で追い抜こうと\nすると速度が少し上がる\n短距離レースでは効果が変わり\n少し前に出る',
  10028,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 60 &&
      args.order >= 2 &&
      args.order_rate <= 50 &&
      args.is_overtake === 1 &&
      args.distance_type === 1,
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 60 &&
      args.order >= 2 &&
      args.order_rate <= 50 &&
      args.is_overtake === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [22, 0, 0],
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
