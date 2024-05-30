const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202692,
  '一番乗り',
  'スタート時に加速力がわずかに上がる\n＜中距離＞',
  20269,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.distance_type === 3 && args.phase === 0, () => false],
  [1.5, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
