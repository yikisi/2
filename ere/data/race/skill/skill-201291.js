const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201291,
  '再燃焼',
  'レース終盤に持久力を少し使って\n加速力を上げる＜作戦・逃げ＞',
  20129,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.running_style === 1 && args.phase_random === 2, () => true],
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
    [0.4, -0.02, 0],
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
  [60, 0],
  1,
);
