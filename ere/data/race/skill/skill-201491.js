const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201491,
  '冷静沈着',
  '前のウマ娘のすぐ後ろに付けると\n落ち着いて持久力を回復する\n＜作戦・追込＞',
  20149,
  2,
  4,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.infront_near_lane_time >= 1 &&
      args.accumulatetime >= 10,
    () => true,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
);
