const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202391,
  '输出1000%！',
  '在比赛中盘一开始的地方消耗大量体力，使速度大幅提升＜作战・领放＞',
  20239,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.phase_firsthalf_random === 1 && args.running_style === 1,
    () => false,
  ],
  [2.7, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, -0.04, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
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
