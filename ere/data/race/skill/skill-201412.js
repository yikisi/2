const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201412,
  '十万马力',
  '上坡速度略微上升＜作战・居中＞',
  20141,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.up_slope_random === 1,
    () => false,
  ],
  [2.4, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
