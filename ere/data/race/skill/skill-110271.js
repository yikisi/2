const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110271,
  '献给你的雕花',
  '临近终盘的下坡处在第二名开外距离领头4马身以内时，短时间内速度提升，中距离比赛则额外略微提升加速度',
  11027,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.slope === 2 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.distance_diff_top <= 10 &&
      args.distance_type === 3,
    (args) =>
      args.distance_rate >= 60 &&
      args.slope === 2 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.distance_diff_top <= 10 &&
      args.distance_type !== 3,
  ],
  [4, 4],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
