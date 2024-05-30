const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100301,
  'ブルーローズチェイサー',
  'レース終盤に追い抜いて\n先団につけると最終直線で\n強い意志を持って速度が上がる',
  10030,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 && args.order <= 4 && args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
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
    [0.35, 0, 0],
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
