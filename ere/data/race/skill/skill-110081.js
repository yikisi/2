const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110081,
  'Into High Gear!',
  'レース中盤以降の下り坂で中団だと坂を\n下った後少しの間速度を上げる\n東京レース場ならさらにギアを上げる',
  11008,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80 &&
      args.track_id === 10006,
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80,
  ],
  [
    (args) => args.slope === 0 || args.slope === 1,
    (args) => args.slope === 0 || args.slope === 1,
  ],
  [5, 4],
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
    [0.35, 0.1, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 1, 0],
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
