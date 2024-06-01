const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201103,
  '光芒一闪',
  '在直线加快速度＜中距离＞',
  20110,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.straight_random === 1,
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
  false,
);
