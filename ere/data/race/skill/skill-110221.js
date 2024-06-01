const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110221,
  'Best day ever',
  '终盘最终弯道往后处于好位置时提升速度。若距离终点尚远，则会展现出绝佳状态额外提升少量加速度',
  11022,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 401 &&
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
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
