const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110741,
  'Illuminate you',
  '中盤に中団にいるとき速度をわずかに\n落として、持久力をすごく回復する\nスタミナが十二分に高いとその後\n終盤に長時間わずかに前に出続ける',
  11074,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 && args.order_rate >= 40 && args.order_rate <= 80,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.base_stamina >= 1200 &&
      args.phase >= 2,
  ],
  [1.2, 8],
  [500, 500],
  [
    [9, 21, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.075, -0.15, 0],
    [0.15, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [2, 3],
  [30, 30],
  0,
  true,
);
