const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100491,
  '会当凌绝顶，听我楚狂笑',
  '最终弯道之后准备超越前方马娘时将在剩余400m以后的好位置处提高速度人气较低的时候速度大幅提升',
  10049,
  5,
  18,
  340,
  [
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
    (args) => args.is_finalcorner === 1 && args.is_overtake === 1,
  ],
  [
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity >= 4,
    (args) =>
      args.remain_distance <= 400 &&
      args.order_rate >= 30 &&
      args.order_rate <= 50 &&
      args.popularity < 4,
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
