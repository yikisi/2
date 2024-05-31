const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201292,
  '二の矢',
  'レース終盤に持久力を少し使って\n加速力をわずかに上げる＜作戦・逃げ＞',
  20129,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 1 && args.phase_random === 2, () => false],
  [3, 0],
  [500, 0],
  [
    [31, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, -0.02, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
