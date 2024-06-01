const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202411,
  '风云之志',
  '临近比赛终盘，若位于第2名以后且距离前方马娘2马身以内则速度会短暂稍微提升＜作战・先行＞',
  20241,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.order >= 2 &&
      args.distance_diff_top <= 5 &&
      args.distance_rate >= 60 &&
      args.phase === 1,
    () => false,
  ],
  [4, 0],
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
    [0.25, 0, 0],
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
