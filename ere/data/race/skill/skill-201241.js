const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201241,
  '逃げ直線◎',
  '直線で速度が少し上がる\n＜作戦・逃げ＞',
  20124,
  1,
  4,
  262,
  [() => true, () => true],
  [
    (args) => args.running_style === 1 && args.straight_random === 1,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 0, 0],
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
  [1, 0],
  [30, 0],
  1,
);
