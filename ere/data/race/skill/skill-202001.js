const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202001,
  '沙尘专家',
  '比赛中盘若位于后方将回复持久力，提升速度＜沙土＞',
  20200,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.35, 0],
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
  [1, 2],
  [30, 30],
  1,
  false,
);
