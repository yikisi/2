const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105001111,
  '鬼气森然',
  '比赛终盘时若身处接近最后方的位置，则回复持久力，并稍微提升速度＜作战・追赶＞',
  10500111,
  6,
  25,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.distance_diff_rate >= 75,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.15, 0],
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
  [2, 0],
  [60, 0],
  1,
  false,
);
