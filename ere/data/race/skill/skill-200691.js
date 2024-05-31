const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200691,
  '慧眼',
  'レース中盤が迫ったとき後ろの方だと\n疲れにくくなり\n前の速度を少し下げる＜マイル＞',
  20069,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate > 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [9, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, -0.2, 0],
    [0, 0, 0],
  ],
  [
    [1, 9, 0],
    [0, 0, 0],
  ],
  [
    [0, 18, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [60, 0],
  1,
  false,
);
