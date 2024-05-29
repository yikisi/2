const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202692,
  '一番乗り',
  'スタート時に加速力がわずかに上がる\n＜中距離＞',
  20269,
  1,
  217,
  [() => true, () => true],
  [(args) => args.distance_type === 3 && args.phase === 0, () => true],
  [1.5, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
  [20, 0],
  1,
);
