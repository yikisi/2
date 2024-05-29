const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100831,
  'Mission: Triumph',
  'レース中間付近以降の直線で中団に\nいると速度を上げる、さらにそこが\n下り坂なら上げ続ける',
  10083,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.slope === 2 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
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
    [3500, 0, 0],
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
