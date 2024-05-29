const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200671,
  '電撃の煌めき',
  'レース終盤に後ろの方だと\n速度が上がり、加速力がちょっと上がる\n＜短距離＞',
  20067,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  1,
);
