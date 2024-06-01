const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100991,
  '闪耀☆苫小牧',
  '沙土比赛时在中盘的弯道上竞争过后，在最后冲刺时处于好位置，加速度会略微上升，如果余力充足的话效果会上升',
  10099,
  5,
  18,
  340,
  [
    (args) =>
      args.phase === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.corner !== 0,
    (args) =>
      args.phase === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.corner !== 0,
  ],
  [
    (args) =>
      args.is_lastspurt === 1 &&
      args.order_rate <= 40 &&
      args.order_rate >= 30 &&
      args.ground_type === 2 &&
      args.lastspurt === 2,
    (args) =>
      args.is_lastspurt === 1 &&
      args.order_rate <= 40 &&
      args.order_rate >= 30 &&
      args.ground_type === 2,
  ],
  [4, 4],
  [500, 500],
  [
    [31, 0, 0],
    [31, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
    [0.2, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  false,
);
