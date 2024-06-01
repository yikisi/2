const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202081,
  '起死回生',
  '比赛进入终盘时若位于中团后方，加速力提升＜中距离＞',
  20208,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
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
