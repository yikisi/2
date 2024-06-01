const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110461,
  'α-star*',
  '比赛中段位于领头附近时，速度逐渐少量提升，在沙土比赛中额外回复少量持久力',
  11046,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.distance_diff_rate <= 10 &&
      args.ground_type === 2,
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.distance_diff_rate <= 10,
  ],
  [6, 6],
  [500, 500],
  [
    [27, 9, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.035, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
  false,
);
