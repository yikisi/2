const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110531,
  '奥義・常夏バーニング！！',
  '残り200m地点で前の方にいると速度が\n少し上がる、短距離レースで終盤に\n追い抜いていた場合はすごく上がる',
  11053,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.change_order_up_end_after >= 1,
    (args) =>
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
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
    [4500, 0, 0],
    [2500, 0, 0],
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
);
