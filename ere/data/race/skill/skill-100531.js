const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100531,
  '热血！！风纪进击',
  '比赛终盘处于最终弯道且身处后方向前逼近时短时间内加速度提升，每次超越其他马娘都会增强效果并刷新时间，最多增强三次',
  10053,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate >= 50 &&
      args.is_finalcorner === 1 &&
      args.bashin_diff_infront <= 1,
    () => false,
  ],
  [2, 0],
  [500, 0],
  [
    [31, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.1, 0.1, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
