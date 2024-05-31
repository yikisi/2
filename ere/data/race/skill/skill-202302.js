const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202302,
  '砂浴び○',
  '前のウマ娘のすぐ後ろに付けると\n速度がわずかに上がる＜ダート＞',
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
