const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105401111,
  '急行！英雄参上！',
  '比赛中盘时位于队伍中后方往后，则速度大幅加快＜作战・居中＞',
  10540111,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 1 &&
      args.order_rate >= 40,
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
    [0.45, 0, 0],
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
