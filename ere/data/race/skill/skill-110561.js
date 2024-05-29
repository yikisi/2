const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110561,
  '禾スナハチ登ル',
  'レース後半に後方で詰め寄られると\nマシマシの幸運パワーが身体に実り\n速度が上がる',
  11056,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate >= 40 &&
      args.overtake_target_time >= 2,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
