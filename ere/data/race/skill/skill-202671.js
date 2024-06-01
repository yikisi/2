const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202671,
  '激昂澎湃',
  '在刚进入比赛终盘时，若位于前方则加速度提升＜英里＞',
  20267,
  2,
  10,
  508,
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
    [0.4, 0, 0],
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
  [60, 0],
  1,
  false,
);
