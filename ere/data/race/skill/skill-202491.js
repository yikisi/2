const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202491,
  '抜群の切れ味',
  'レース終盤突入時まで掛からず後方に\n控え続けていると、終盤始めの方で\n加速力が上がる＜作戦・追込＞',
  20249,
  2,
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
    () => true,
  ],
  [1.2, 0],
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
    [4000, 0, 0],
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
);
