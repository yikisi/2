const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100351,
  '勝利のチケットを、君にッ！',
  '最終コーナー以降に競り合っていると\n最終直線で前方にいる時\n強い気持ちが湧き速度が上がる',
  10035,
  4,
  18,
  340,
  [
    (args) => args.is_finalcorner === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [(args) => args.is_last_straight === 1 && args.order <= 5, () => false],
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
