const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201651,
  'スリップストリーム',
  '前のウマ娘のすぐ後ろに付けると\n速度がわずかに上がる',
  20165,
  1,
  217,
  [() => true, () => true],
  [
    (args) => args.infront_near_lane_time >= 3 && args.accumulatetime >= 10,
    () => true,
  ],
  [3, 0],
  [30, 30],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 0, 0],
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
);
