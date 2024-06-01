const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110401,
  'GET DOWN',
  '在最后弯道若是位于中间梯队并进行名次争夺则比较容易超越并摆脱纠缠',
  11040,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate >= 30 &&
      args.order_rate <= 70 &&
      args.blocked_side_continuetime >= 2,
    () => false,
  ],
  [5, 0],
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
    [0.25, 0.3, 0],
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
  [1, 3],
  [30, 30],
  0,
  false,
);
