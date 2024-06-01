const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210071,
  '想要与你一决胜负',
  '赛程后半若位于前方则速度提高，加速度稍微提高，粉丝越多，效果越好',
  21007,
  2,
  10,
  633,
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
    [0.35, 0.2, 0],
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
  [30, 30],
  1,
  false,
);
