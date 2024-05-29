const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100121,
  'タイマン！デッドヒート！',
  '最終コーナー以降に後ろの方から\n外を回って追い抜いていると\n最終直線で速度を上げる',
  10012,
  5,
  5,
  340,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate >= 40,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => true],
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
    [3500, 0, 0],
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
);
