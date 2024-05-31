const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110251,
  '心からのおもてにゃし',
  'レース前半中団以降に控え続けていると\nレース終盤かつ最終コーナー以降に\n少し前に出る、長距離レースなら\n効果が増える',
  11025,
  5,
  18,
  340,
  [
    (args) => args.distance_rate >= 50 && args.order_rate_out40_continue === 1,
    (args) => args.distance_rate >= 50 && args.order_rate_out40_continue === 1,
  ],
  [
    (args) =>
      args.distance_type === 4 && args.phase >= 2 && args.is_finalcorner === 1,
    (args) => args.phase >= 2 && args.is_finalcorner === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [22, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  false,
);
