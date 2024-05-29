const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110481,
  'GALmem.ふぉーえば♪',
  'レース中間付近で中団にいると\n速度を少し上げ続ける\n絶好調なら効果が増える',
  11048,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.motivation === 5,
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
  ],
  [6, 6],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3000, 0, 0],
    [2500, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
