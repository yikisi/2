const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110611,
  '轟！トレセン応援団！！',
  'レース前半、掛からず最後方付近に\n控え続けていると、最終直線で\n気合を爆発させて加速力が上がる',
  11061,
  5,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate_out70_continue === 1 &&
      args.temptation_count === 0,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => true],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
);
