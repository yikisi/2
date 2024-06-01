const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200622,
  '后方待机',
  '在比赛中盘积攒脚力，略微不容易疲劳＜作战・追赶＞',
  20062,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.distance_diff_rate >= 75,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
  false,
);
