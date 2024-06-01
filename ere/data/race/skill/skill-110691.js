const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110691,
  '尚为花蕾的我啊，绽放吧！',
  '如果在比赛中盘展开竞争且在剩下650m处处于好位置就会为了实现梦想持续提升加速力',
  11069,
  5,
  18,
  340,
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [
    (args) =>
      args.remain_distance <= 651 &&
      args.remain_distance >= 649 &&
      args.order_rate <= 40 &&
      args.order_rate >= 30,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
