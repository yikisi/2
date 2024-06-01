const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  407021,
  '燃起来了！！',
  '中盘超越对手后，速度大幅提升＜英里/中距离＞',
  40702,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 &&
        args.phase === 1 &&
        args.change_order_onetime < 0) ||
      (args.distance_type === 3 &&
        args.phase === 1 &&
        args.change_order_onetime < 0),
    () => false,
  ],
  [1.8, 0],
  [30, 0],
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
