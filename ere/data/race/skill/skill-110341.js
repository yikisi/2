const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110341,
  '灯穂',
  '終盤のコーナーで後方から詰め寄ると\n最終直線で速度が上がる\n終盤のコーナーで追い抜いた回数に\n応じて効果が増える',
  11034,
  5,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.order_rate >= 60 &&
      args.is_overtake === 1,
    () => true,
  ],
  [(args) => args.is_last_straight_onetime === 1, () => true],
  [5, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [11, 1, 1],
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
