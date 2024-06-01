const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200672,
  '紧追不舍',
  '比赛终盘位于后方时，略微容易冲刺＜短距离＞',
  20067,
  1,
  2,
  217,
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
    [0.15, 0.05, 0],
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
  [20, 0],
  1,
  false,
);
