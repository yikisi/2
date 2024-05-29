const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201351,
  '食いしん坊',
  'レース中盤に持久力が回復する\n＜作戦・先行＞',
  20135,
  2,
  9,
  508,
  [() => true, () => true],
  [(args) => args.running_style === 2 && args.phase_random === 1, () => true],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
);
