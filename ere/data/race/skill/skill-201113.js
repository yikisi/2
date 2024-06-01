const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201113,
  '光芒圆刃',
  '在弯道加快速度＜中距离＞',
  20111,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.all_corner_random === 1,
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
