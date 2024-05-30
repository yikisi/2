const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100361,
  'trigger:BEAT',
  '最終コーナー以降に中団の内ラチ側にい\nると勝利への道筋を見出して最終直線で\n速度が上がりコース取りがうまくなる',
  10036,
  5,
  18,
  340,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 75 &&
      args.lane_type === 0,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
  [5, 0],
  [500, 0],
  [
    [27, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.035, 0],
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
  [1, 3],
  [30, 30],
  0,
);
