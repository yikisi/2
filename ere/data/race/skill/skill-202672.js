const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202672,
  '雀跃',
  '在刚进入比赛终盘时，若位于前方则稍微提升加速度＜英里＞',
  20267,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate <= 50,
    () => false,
  ],
  [1.8, 0],
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
