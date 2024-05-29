const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100551,
  '万彩☆マーベラス★世界',
  'レース中間付近で中団にいるとき\n近くにウマ娘がいると速度が上がる\n視界にウマ娘が4人以上いると\n効果が増える',
  10055,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 40 &&
      args.order_rate <= 80 &&
      args.order_rate >= 50 &&
      args.near_count >= 1 &&
      args.visiblehorse >= 4,
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 40 &&
      args.order_rate <= 80 &&
      args.order_rate >= 50 &&
      args.near_count >= 1,
  ],
  [5, 5],
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
    [0.4, 0, 0],
    [0.35, 0, 0],
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
