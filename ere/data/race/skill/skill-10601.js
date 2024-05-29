const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10601,
  'アタシもたまには、ね？',
  'レース終盤に3番手で\n後ろのウマ娘との差が1バ身以内だと\n闘志に火が付き速度が少し上がる',
  1060,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 && args.order === 3 && args.bashin_diff_behind <= 1,
    () => true,
  ],
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
    [0.25, 0, 0],
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
  [30, 0],
  0,
);
