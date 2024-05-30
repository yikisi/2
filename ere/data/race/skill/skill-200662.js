const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200662,
  '様子見',
  'レース中盤に後ろの方だと\nわずかに疲れにくくなり\n加速力がちょっと上がる＜短距離＞',
  20066,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 1 &&
      args.order_rate > 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [9, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0.1, 0],
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
  [2, 0],
  [20, 0],
  1,
);
