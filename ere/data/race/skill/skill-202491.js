const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202491,
  '超众的凌厉攻势',
  '冲进终盘之前一直保持冷静在后方等待机会的话，在终盘一开始会提升加速度＜作战・追赶＞',
  20249,
  2,
  10,
  508,
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.order_rate_out50_continue === 1 &&
      args.temptation_count === 0,
    () => true,
  ],
  [
    (args) => args.running_style === 4 && args.phase_firsthalf_random === 2,
    () => false,
  ],
  [1.2, 0],
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
