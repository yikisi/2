const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202432,
  '稳健的步伐',
  '临近终盘时处于领头或距离领头4马身以内，则速度和加速度略微提升＜先行・中距离＞',
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
  false,
);
