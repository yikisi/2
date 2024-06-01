const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201512,
  '视线',
  '比赛的最终区域使自己紧盯的马娘紧张感上升一点点＜作战・追赶＞',
  20151,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 && args.phase_random === 2 && args.order >= 2,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.15, 0, 0],
    [0, 0, 0],
  ],
  [
    [4, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
  false,
);
