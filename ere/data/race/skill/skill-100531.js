const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100531,
  '熱血！！風紀アタック',
  '終盤最終コーナー以降に後方から迫ると\n短い間加速力がちょっと上がる\n効果中に追い抜くと\n3回まで効果と時間が増える',
  10053,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate >= 50 &&
      args.is_finalcorner === 1 &&
      args.bashin_diff_infront <= 1,
    () => false,
  ],
  [2, 0],
  [500, 0],
  [
    [31, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.1, 0.1, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
