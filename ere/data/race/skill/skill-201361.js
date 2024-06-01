const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201361,
  '不屈不挠',
  '比赛中盘位于后方时，加速度少量上升＜作战・先行＞',
  20136,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_random === 1 &&
      args.order_rate > 40,
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
    [0.3, 0, 0],
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
  [3, 0],
  [40, 0],
  1,
  false,
);
