const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200672,
  '詰め寄り',
  'レース終盤に後ろの方だと\n速度がわずかに上がり、加速力が\nほんのちょっと上がる＜短距離＞',
  20067,
  1,
  2,
  217,
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
    [0.15, 0.05, 0],
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
  [20, 0],
  1,
);
