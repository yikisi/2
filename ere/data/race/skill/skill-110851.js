const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110851,
  '蒼炎',
  'レース中間付近で中団にいると\n速度が少し上がる\nマイルレースなら効果と時間が増える',
  11085,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 45 &&
      args.order_rate <= 90 &&
      args.order_rate >= 40 &&
      args.distance_type === 2,
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 45 &&
      args.order_rate <= 90 &&
      args.order_rate >= 40,
  ],
  [6, 5],
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
    [3500, 0, 0],
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
