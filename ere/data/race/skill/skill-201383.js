const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201383,
  '鋭脚一閃',
  '直線で速度が上がる\n＜作戦・差し＞',
  20138,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.straight_random === 1,
    () => false,
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
    [0.35, 0, 0],
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
  [60, 0],
  1,
);
