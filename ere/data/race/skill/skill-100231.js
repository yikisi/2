const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100231,
  '∴win Q.E.D.',
  '終盤の最終コーナー以降で前の方だと\n速度が上がる、冷静さを保っていたなら\n勝利の方程式を導きすごく上がる',
  10023,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order <= 4 &&
      args.temptation_count === 0,
    (args) => args.phase >= 2 && args.is_finalcorner === 1 && args.order <= 4,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
