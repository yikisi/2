const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110031,
  '非我莫属',
  '最终弯道之后位于前列穷追不舍时，会在最终直线展现不屈的斗志，大幅提升速度',
  11003,
  5,
  18,
  340,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.is_overtake === 1 &&
      args.order <= 5 &&
      args.order_rate <= 50 &&
      args.overtake_target_no_order_up_time >= 2,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
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
    [0.45, 0, 0],
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
