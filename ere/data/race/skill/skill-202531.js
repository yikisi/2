const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202531,
  '优位形成',
  '在比赛中盘时，速度提升＜英里/中距离＞',
  20253,
  2,
  10,
  508,
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
