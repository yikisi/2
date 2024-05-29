const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100761,
  '花開き、世界',
  'レース中間地点で中団にいると速度を\n少し上げる、長距離レースだと効果時間\nが増えさらに持久力をすごく回復する',
  10076,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
  ],
  [6, 5],
  [500, 500],
  [
    [27, 9, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 750, 0],
    [2500, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
);
