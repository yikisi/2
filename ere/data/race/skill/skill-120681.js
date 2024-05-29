const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120681,
  'ミンナノアタシへ！',
  '序・中盤に前の方で追い抜かれるか競り\n合ったとき短い間速度を上げる、その後\n長距離レースならレース後半に2番手\n以内だと速度を少し上げ続ける',
  12068,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.phase <= 1 &&
        args.change_order_onetime > 0 &&
        args.accumulatetime >= 5 &&
        args.order_rate <= 50) ||
      (args.phase <= 1 &&
        args.blocked_side_continuetime >= 2 &&
        args.accumulatetime >= 5 &&
        args.order_rate <= 50),
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.order <= 2 &&
      args.distance_rate >= 50 &&
      args.distance_type === 4,
  ],
  [3, 6],
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
    [3500, 0, 0],
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
