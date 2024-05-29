const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202151,
  '勇往邁進',
  'レース中盤に持久力を少し使って\n速度をすごく上げる＜作戦・差し＞',
  20215,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.running_style === 3 && args.phase_random === 1, () => true],
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
    [0.45, -0.02, 0],
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
  [60, 0],
  1,
);
