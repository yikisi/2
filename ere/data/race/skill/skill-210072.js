const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210072,
  '梦想的途中',
  '赛程后半若位于前方则速度稍微提高，加速度略微提高，粉丝越多，效果越好',
  21007,
  1,
  2,
  263,
  [() => true, () => true],
  [
    (args) => args.distance_rate_after_random === 50 && args.order_rate <= 65,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [12, 12, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.07, 0],
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
  [1, 3],
  [15, 15],
  1,
  false,
);
