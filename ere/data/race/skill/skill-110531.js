const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110531,
  '奥义・灼热常夏！！',
  '剩余200m处位于前方时速度少量提升，若在短距离比赛的终盘进行过赶超，则速度大幅提升',
  11053,
  5,
  18,
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
    [0.45, 0, 0],
    [0.25, 0, 0],
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
