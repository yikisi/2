const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110671,
  '玄雲散らす、黄金甲矢',
  'レース中間付近で中団にいるとき\n燦然と輝きを放って速度が上がり\nさらに持久力を少し回復する',
  11067,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 350, 0],
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
