const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202411,
  '風雲の志',
  'レース終盤目前、2番手以降に控えて\n先頭から2バ身以内だとしばらくの間\n速度が少し上がる＜作戦・先行＞',
  20241,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.order >= 2 &&
      args.distance_diff_top <= 5 &&
      args.distance_rate >= 60 &&
      args.phase === 1,
    () => true,
  ],
  [4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 0, 0],
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
