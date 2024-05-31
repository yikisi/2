const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110011,
  'わやかわ♪マリンダイヴ',
  '中盤に2回スキルを使い\n中団にいると持久力を回復し\nさらに速度が少し上がる',
  11001,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 80 &&
      args.activate_count_middle >= 2,
    () => false,
  ],
  [5, 0],
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
    [0.055, 0.25, 0],
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
  0,
  false,
);
