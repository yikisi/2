const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100511,
  '花苞绽放之时',
  '中盘经过弯道竞争，且终盘的最终弯道过半后自身占据好位置时，提升加速度',
  10051,
  5,
  18,
  340,
  [
    (args) =>
      args.phase === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.corner !== 0,
    () => true,
  ],
  [
    (args) =>
      (args.phase >= 2 &&
        args.is_finalcorner_laterhalf === 1 &&
        args.order >= 3 &&
        args.order_rate <= 40) ||
      (args.phase >= 2 &&
        args.is_finalcorner === 1 &&
        args.corner === 0 &&
        args.order >= 3 &&
        args.order_rate <= 40),
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
