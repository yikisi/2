const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101001,
  'Never Say Never',
  '剩余300m时位于前方，则速度少量提升若在沙土比赛中与领头赛马娘距离较近时再稍微向前突进',
  10100,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 299 &&
      args.remain_distance <= 301 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40 &&
      args.distance_diff_top <= 5 &&
      args.ground_type === 2,
    (args) =>
      args.remain_distance >= 299 &&
      args.remain_distance <= 301 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 22, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.25, 0],
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
  [1, 3],
  [30, 30],
  0,
  false,
);
