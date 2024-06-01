const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201112,
  '中距离弯道○',
  '在弯道中的速度略微加快＜中距离＞',
  20111,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
