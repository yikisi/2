const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202312,
  '干劲十足',
  '比赛终盘位于前方时，加速度稍微提升＜沙土＞',
  20231,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_random === 2 &&
      args.order_rate <= 50,
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
