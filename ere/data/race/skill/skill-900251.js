const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  900251,
  'アナタヲ・オイカケテ',
  'レース後半に中団から\n速度をちょっとずつ上げ前方のウマ娘を\nほんのちょっと萎縮させる',
  90025,
  1,
  2,
  180,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70,
    () => true,
  ],
  [3.6, 0],
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
    [0.05, -0.025, 0],
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
  [15, 0],
  1,
);
