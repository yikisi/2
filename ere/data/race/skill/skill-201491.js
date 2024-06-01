const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201491,
  '沉着冷静',
  '紧跟前方赛马娘时，使自己冷静下来恢复持久力＜作战・追赶＞',
  20149,
  2,
  9,
  508,
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
    [0.055, 0, 0],
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
  false,
);
