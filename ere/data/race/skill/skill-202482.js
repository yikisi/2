const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202482,
  '施展本领',
  '临近终盘位于领头或是距离领头4马身以内时，在终盘稍微提升加速度＜先行・长距离＞',
  20248,
  1,
  2,
  217,
  [
    (args) =>
      args.distance_diff_top <= 10 &&
      args.distance_rate >= 60 &&
      args.phase === 1,
    () => true,
  ],
  [
    (args) =>
      args.distance_type === 4 && args.running_style === 2 && args.phase === 2,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
