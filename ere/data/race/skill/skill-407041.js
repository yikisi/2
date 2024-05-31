const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  407041,
  '無二の情熱',
  'レース終盤が迫ったとき\n中団以前にいると速度がすごく上がる\n＜マイル＞',
  40704,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate <= 70,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
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
  1,
  false,
);
