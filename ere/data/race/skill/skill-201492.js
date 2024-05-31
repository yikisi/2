const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201492,
  '冷静',
  '前のウマ娘のすぐ後ろに付けると\n落ち着いて持久力をわずかに回復する\n＜作戦・追込＞',
  20149,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.infront_near_lane_time >= 1 &&
      args.accumulatetime >= 10,
    () => false,
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
    [0.015, 0, 0],
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
  [20, 0],
  1,
  false,
);
