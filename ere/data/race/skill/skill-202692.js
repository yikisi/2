const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202692,
  '打头阵',
  '出闸时加速度稍微提升＜中距离＞',
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
  false,
);
