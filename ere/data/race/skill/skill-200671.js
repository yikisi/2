const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200671,
  '电击光辉',
  '比赛终盘位于后方时，速度提升，加速度略微提升＜短距离＞',
  20067,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
