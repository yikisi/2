const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201311,
  '先行直線◎',
  '直線で速度が少し上がる\n＜作戦・先行＞',
  20131,
  1,
  262,
  [() => true, () => true],
  [
    (args) => args.running_style === 2 && args.straight_random === 1,
    () => true,
  ],
  [3, 0],
  [500, 500],
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
