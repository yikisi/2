const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100071,
  '不沈艦、抜錨ォッ！',
  'レース中間付近で後方にいると\nロングスパートをかけて\n速度を少し上げ続ける',
  10007,
  4,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 60 &&
      args.order_rate > 50,
    () => true,
  ],
  [6, 0],
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
    [2500, 0, 0],
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
  0,
);
