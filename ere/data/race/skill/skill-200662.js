const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200662,
  '观望',
  '比赛中盘在后方时稍微不容易疲劳并提高一点加速度＜短距离＞',
  20066,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 1 &&
      args.order_rate > 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [9, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0.1, 0],
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
  [2, 0],
  [20, 0],
  1,
  false,
);
