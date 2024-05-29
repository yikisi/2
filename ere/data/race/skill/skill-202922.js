const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202922,
  '惜しみなし',
  'レース中盤に持久力を少し使って\n速度が少し上がる＜作戦・追込＞',
  20292,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 4 && args.phase_random === 1, () => true],
  [2.4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, -200, 0],
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
  [1, 0],
  [20, 0],
  1,
);
