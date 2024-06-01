const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201302,
  '重启',
  '在比赛序盘没取得领先时，让前面的马娘稍微变迟缓＜作战・领放＞',
  20130,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.phase_random === 0 &&
      args.order >= 2 &&
      args.accumulatetime >= 5,
    () => false,
  ],
  [3, 0],
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
    [-0.1, 0, 0],
    [0, 0, 0],
  ],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [3, 5],
  [10, 10],
  1,
  false,
);
