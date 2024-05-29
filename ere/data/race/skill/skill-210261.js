const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210261,
  '太陽の叡智',
  'レース中盤に競り合うと速度が上がる\n獲得したスキルの数に応じて\n効果が高まる',
  21026,
  2,
  633,
  [() => true, () => true],
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [1.8, 0],
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
