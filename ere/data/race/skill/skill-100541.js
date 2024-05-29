const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100541,
  '疾風爆走ペガサスダッシュ！',
  'レース後半に後方から追い抜いていた\n場合、残り150mを切ってから前の方に\nいると少しの間速度がすごく上がる',
  10054,
  4,
  18,
  340,
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
    [0.45, 0, 0],
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
