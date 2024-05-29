const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202301,
  '優雅な砂浴び',
  '前のウマ娘のすぐ後ろに付けると\n速度が上がる＜ダート＞',
  20230,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.accumulatetime >= 5 &&
      args.infront_near_lane_time >= 3,
    () => true,
  ],
  [3, 0],
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
    [3500, 0, 0],
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
