const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202431,
  '快進撃',
  '終盤が迫ったとき先頭にいるか\n先頭から4バ身以内だと速度と加速力が\n少し上がる＜先行・中距離＞',
  20243,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 2 &&
      args.phase_laterhalf_random === 1 &&
      args.distance_diff_top <= 10,
    () => false,
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
    [0.25, 0.3, 0],
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
  [30, 30],
  1,
  false,
);
