const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201121,
  '千里眼',
  'レース序盤に観察力が高まり\n視野を広く持てる＜中距離＞',
  20112,
  2,
  10,
  334,
  [() => true, () => true],
  [(args) => args.distance_type === 3 && args.phase_random === 0, () => false],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [15, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
);
