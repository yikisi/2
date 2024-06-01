const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201393,
  '锐脚圆刃',
  '在弯道的速度上升＜作战・居中＞',
  20139,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.all_corner_random === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
