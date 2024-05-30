const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100441,
  'いただき☆ストレリチア！',
  '最終コーナー突入時まで冷静に後方で\n控えていると残り300m地点でスピード\nアップの魔法をかけて速度を上げ続ける',
  10044,
  5,
  18,
  340,
  [
    (args) =>
      args.order_rate_out50_continue === 1 &&
      args.temptation_count === 0 &&
      args.is_finalcorner === 1,
    () => true,
  ],
  [(args) => args.remain_distance <= 300, () => false],
  [6, 0],
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
