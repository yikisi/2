const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201411,
  '百万马力',
  '上坡速度少量上升＜作战・居中＞',
  20141,
  2,
  10,
  334,
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
