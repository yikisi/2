const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202412,
  '进取心',
  '临近比赛终盘，若位于第2名以后且距离前方马娘2马身以内则速度会短暂略微提升＜作战・先行＞',
  20241,
  1,
  2,
  217,
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
    [0.05, 0, 0],
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
  [20, 0],
  1,
  false,
);
