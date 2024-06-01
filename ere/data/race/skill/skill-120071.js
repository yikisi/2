const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120071,
  'Vive la GOLD',
  '中距离或长距离比赛的最终弯道往后，在后方准备超越对手时速度提升，如果出闸时起跑慢了，变为速度大幅提升',
  12007,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50 &&
        args.is_badstart === 1) ||
      (args.distance_type === 4 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50 &&
        args.is_badstart === 1),
    (args) =>
      (args.distance_type === 3 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50) ||
      (args.distance_type === 4 &&
        args.is_finalcorner === 1 &&
        args.is_overtake === 1 &&
        args.order_rate >= 50),
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
    [0.35, 0, 0],
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
