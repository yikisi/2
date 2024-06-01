const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201043,
  '狂风圆刃',
  '在弯道上的速度加快＜英里＞',
  20104,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.distance_type === 2 && args.all_corner_random === 1,
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
