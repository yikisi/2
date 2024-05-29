const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10541,
  'ペガサスフルパワー！',
  'レース後半に後方から追い抜いていた\n場合、残り150mを切ってから前の方に\nいると少しの間速度が上がる',
  1054,
  3,
  18,
  240,
  [
    (args) =>
      args.order_rate >= 45 &&
      args.distance_rate >= 50 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.remain_distance <= 150 && args.order_rate <= 50, () => true],
  [4, 0],
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
  [30, 0],
  0,
);
