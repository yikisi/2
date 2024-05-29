const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110651,
  'ノッてけ、マッシュアップ！',
  'レース序盤に前方で競り合ったとき\n速度を上げる、マイルレースなら\n持久力を使って速度をすごく上げる',
  11065,
  5,
  5,
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
    [4500, -300, 0],
    [3500, 0, 0],
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
);
