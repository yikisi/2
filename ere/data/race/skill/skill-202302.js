const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202302,
  '沙浴○',
  '紧跟前方的赛马娘时，速度稍微提升＜沙土＞',
  20230,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
