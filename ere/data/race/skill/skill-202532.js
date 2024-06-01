const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202532,
  '端淑步伐',
  '在比赛中盘时，速度稍微提升＜英里/中距离＞',
  20253,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 && args.phase_random === 1) ||
      (args.distance_type === 3 && args.phase_random === 1),
    () => false,
  ],
  [2.4, 0],
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
