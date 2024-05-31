const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100911,
  'デラックス☆ファウンテン',
  'レース終盤の最終直線に入ったとき\n中団にいると残り300ｍを切ってから\n速度が少し上がる、レースを冷静に\n運べていたならすごく上がる',
  10091,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight_onetime === 1 &&
      args.order_rate >= 30 &&
      args.order_rate <= 70 &&
      args.temptation_count === 0,
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight_onetime === 1 &&
      args.order_rate >= 30 &&
      args.order_rate <= 70,
  ],
  [
    (args) => args.remain_distance <= 300,
    (args) => args.remain_distance <= 300,
  ],
  [5, 5],
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
