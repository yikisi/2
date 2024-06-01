const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201362,
  '重振旗鼓',
  '比赛中盘位于后方时，加速度略微上升＜作战・先行＞',
  20136,
  1,
  2,
  217,
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
    [0.2, 0, 0],
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
  [20, 0],
  1,
  false,
);
