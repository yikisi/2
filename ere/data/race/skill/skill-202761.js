const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202761,
  '打飞它吧！',
  '比赛中盘位于前方时，一段时间内速度少量上升＜作战・先行＞',
  20276,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_random === 1 &&
      args.order_rate <= 50,
    () => false,
  ],
  [4, 0],
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
    [0.25, 0, 0],
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
