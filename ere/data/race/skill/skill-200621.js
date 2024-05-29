const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200621,
  '眠れる獅子',
  'レース中盤に最後方付近にいると\n疲れにくくなる＜作戦・追込＞',
  20062,
  2,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.distance_diff_rate >= 75,
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
