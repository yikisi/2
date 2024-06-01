const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100041,
  '红焰齿轮/LP1211-M',
  '最终弯道后处于前列时，就会换挡提升加速度',
  10004,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 && args.order <= 5 && args.order_rate <= 50,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
