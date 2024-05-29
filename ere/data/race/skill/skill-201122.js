const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201122,
  'ホークアイ',
  'レース序盤に観察力が高まり\n視野を少し広く持てる＜中距離＞',
  20112,
  1,
  129,
  [() => true, () => true],
  [(args) => args.distance_type === 3 && args.phase_random === 0, () => true],
  [3, 0],
  [500, 500],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [100000, 0, 0],
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
  [30, 0],
  1,
);
