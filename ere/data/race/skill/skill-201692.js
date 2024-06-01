const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201692,
  '安静的呼吸',
  '比赛临近中盘时，若位于中团以后的位置，稍微恢复持久力＜作战・居中＞',
  20169,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate >= 40,
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
