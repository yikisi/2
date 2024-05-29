const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100641,
  'ぶっちぎりロード',
  'スタート後からレース後半まで前の方を\nキープすると気分を爆アゲして持久力を\n回復しさらに速度を少しずつ上げる',
  10064,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) => args.distance_rate >= 50 && args.order_rate_in20_continue === 1,
    () => true,
  ],
  [6, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 2500, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
);
