const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110021,
  '水平線のその先へ',
  '終盤突入時に先頭だと少し前に出る\nそこが第3コーナーで中盤に大きく差を\nつけて先頭にいた場合すごく前に出る',
  11002,
  5,
  5,
  340,
  [
    (args) =>
      args.phase === 1 && args.bashin_diff_behind >= 3 && args.order === 1,
    () => true,
  ],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.corner === 3 &&
      args.order === 1,
    (args) =>
      args.distance_rate >= 66 && args.distance_rate <= 68 && args.order === 1,
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
    [4500, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
);
