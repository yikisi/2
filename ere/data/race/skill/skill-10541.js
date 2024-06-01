const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10541,
  '天马全力出击！',
  '比赛后半段若从后方进行了超越，剩余150m后自身位于前方时，在短时间内速度提升',
  1054,
  3,
  18,
  240,
  [
    (args) =>
      args.order_rate >= 45 &&
      args.distance_rate >= 50 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.remain_distance <= 150 && args.order_rate <= 50, () => false],
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
  [30, 0],
  0,
  false,
);
