const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202152,
  'フルスロットル',
  'レース中盤に持久力を少し使って\n速度を少し上げる＜作戦・差し＞',
  20215,
  1,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 3 && args.phase_random === 1, () => true],
  [2.4, 0],
  [500, 500],
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
