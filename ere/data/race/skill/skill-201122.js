const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201122,
  '鹰眼',
  '比赛初盘观察力提高，视野稍微开阔＜中距离＞',
  20112,
  1,
  2,
  129,
  [() => true, () => true],
  [(args) => args.distance_type === 3 && args.phase_random === 0, () => false],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [10, 0, 0],
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
  [3, 0],
  [30, 0],
  1,
  false,
);
