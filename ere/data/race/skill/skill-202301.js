const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202301,
  '优雅的沙浴',
  '紧跟前方的赛马娘时，速度提升＜沙土＞',
  20230,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.accumulatetime >= 5 &&
      args.infront_near_lane_time >= 3,
    () => false,
  ],
  [3, 0],
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
  1,
  false,
);
