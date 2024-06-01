const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110591,
  '奔向那名为悸动的彼方',
  '即将进入比赛终盘的下坡、处于队伍中央，且距离终点较远时，会尽情地享受比赛，提高速度',
  11059,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.slope === 2 &&
      args.phase === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.remain_distance >= 500,
    () => false,
  ],
  [5, 0],
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
    [0.35, 0, 0],
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
  0,
  false,
);
