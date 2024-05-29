const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100601,
  'きっとその先へ…！',
  'レース終盤に3番手で\n後ろのウマ娘との差が1バ身以内だと\n秘めた闘志に火が付き速度が上がる',
  10060,
  4,
  18,
  340,
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
