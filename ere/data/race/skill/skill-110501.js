const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110501,
  'Hephaistos',
  '在比赛终盘的最终弯道后半，向着顶点进发，从中间集团开始提高速度',
  11050,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 75 &&
      args.order_rate >= 40,
    () => false,
  ],
  [5, 0],
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
  [60, 0],
  0,
  false,
);
