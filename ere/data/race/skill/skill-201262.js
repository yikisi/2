const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201262,
  '规避危险',
  '在比赛序盘，稍微不容易被包围＜作战・领放＞',
  20126,
  1,
  2,
  129,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 1 &&
        args.phase === 0 &&
        args.blocked_front_continuetime >= 1) ||
      (args.running_style === 1 &&
        args.phase === 0 &&
        args.blocked_side_continuetime >= 1),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [28, 35, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.025, 0.5, 0],
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
  [3, 0],
  [25, 0],
  1,
  false,
);
