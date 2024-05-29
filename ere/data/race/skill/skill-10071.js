const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10071,
  '波乱注意砲！',
  'レース中間付近で後方にいると\nロングスパートをかけて\n速度をわずかに上げ続ける',
  1007,
  3,
  18,
  240,
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
    [0.15, 0, 0],
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
  [30, 0],
  0,
);
