const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100991,
  'かがやけ☆とまこまい',
  'ダートレースで中盤のコーナーで\n競り合っていた場合、ラストスパートで\n好位置にいると加速力がわずかに上がる\n余力十分なら効果が増える',
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
);
