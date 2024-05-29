const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100681,
  '勝ち鬨ワッショイ！',
  '前方にいるとき、レース後半の第3\nコーナーで速度を少し上げる、または\n終盤の向正面で力強く前に踏み込む',
  10068,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 2 && args.straight_front_type === 2 && args.order <= 2,
    (args) => args.distance_rate >= 50 && args.corner === 3 && args.order <= 2,
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
    [0.25, 0.3, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
