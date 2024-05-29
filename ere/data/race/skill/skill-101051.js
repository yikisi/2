const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101051,
  'アド・アストラ',
  'レース中間付近で中団にいると\n速度が上がる、中距離レースで7回以上\nスキルを使っているとすごく上がる',
  10105,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type === 3 &&
      args.activate_count_all >= 7,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
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
    [4500, 0, 0],
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
