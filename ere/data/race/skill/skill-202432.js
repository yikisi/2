const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202432,
  '確かな足取り',
  '終盤が迫ったとき先頭にいるか\n先頭から4バ身以内だと速度と加速力が\nちょっと上がる＜先行・中距離＞',
  20243,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 2 &&
      args.phase_laterhalf_random === 1 &&
      args.distance_diff_top <= 10,
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
    [0.05, 0.1, 0],
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
  [1, 3],
  [10, 10],
  1,
);
