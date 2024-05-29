const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  407021,
  '燃えてきたッ！！',
  'レース中盤に追い抜くと\n速度がすごく上がる＜マイル/中距離＞',
  40702,
  6,
  2,
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
    () => true,
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
    [4500, 0, 0],
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
);
