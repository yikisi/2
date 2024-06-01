const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110651,
  '跟上我的Mashup！',
  '比赛序盘位于前方竞争时速度提升，若是英里比赛，则消耗体力使速度大幅提升',
  11065,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.blocked_side_continuetime >= 2 &&
      args.order_rate <= 50 &&
      args.phase === 0 &&
      args.accumulatetime >= 5,
    (args) =>
      args.blocked_side_continuetime >= 2 &&
      args.order_rate <= 50 &&
      args.phase === 0 &&
      args.accumulatetime >= 5,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 9, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, -0.03, 0],
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
