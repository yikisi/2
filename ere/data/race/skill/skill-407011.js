const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  407011,
  'キラメキの勝負',
  'レース中盤が迫ったとき\n速度がすごく上がる＜マイル/中距離＞',
  40701,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 && args.phase_laterhalf_random === 0) ||
      (args.distance_type === 3 && args.phase_laterhalf_random === 0),
    () => false,
  ],
  [1.8, 0],
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
);
