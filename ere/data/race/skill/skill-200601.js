const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200601,
  '善于换乘',
  '比赛终盘开始时位于中团以后时，加速度提升＜作战・居中＞',
  20060,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate >= 40,
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
