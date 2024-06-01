const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201442,
  '锐利目光',
  '在比赛终盘使其他的马娘略微产生动摇＜作战・居中＞',
  20144,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
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
    [-0.01, 0, 0],
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
  [2, 5],
  [10, 10],
  1,
  false,
);
