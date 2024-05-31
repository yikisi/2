const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201432,
  '読解力',
  'レース中盤に観察力が高まり視野を\nわずかに広く持てる＜作戦・差し＞',
  20143,
  1,
  2,
  85,
  [() => true, () => true],
  [(args) => args.running_style === 3 && args.phase_random === 1, () => false],
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
    [5, 0, 0],
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
  [20, 0],
  1,
  false,
);
