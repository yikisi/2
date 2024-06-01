const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110101,
  '旅途愉快!',
  '剩余200m处位于队伍前方时提高速度，若此时前方较近处有赛马娘时会以强有力的奔跑向前冲刺',
  11010,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_diff_top <= 5 &&
      args.order >= 2 &&
      args.order_rate <= 40 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
    (args) =>
      args.order >= 2 &&
      args.order_rate <= 40 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 22, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.15, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 1, 0],
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
