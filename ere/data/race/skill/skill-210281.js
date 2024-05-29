const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210281,
  '大地の叡智',
  'レース終盤の中ほどで速度が上がる\n獲得したスキルの数に応じて\n効果が高まる',
  21028,
  2,
  633,
  [() => true, () => true],
  [(args) => args.phase_laterhalf_random === 2, () => true],
  [2.4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [2, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
  1,
);
