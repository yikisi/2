const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201431,
  '大局観',
  'レース中盤に観察力が高まり\n視野を広く持てる＜作戦・差し＞',
  20143,
  2,
  2,
  334,
  [() => true, () => true],
  [(args) => args.running_style === 3 && args.phase_random === 1, () => true],
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
    [150000, 0, 0],
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
