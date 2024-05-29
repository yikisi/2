const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200622,
  '後方待機',
  'レース中盤に最後方付近にいると\nわずかに疲れにくくなる＜作戦・追込＞',
  20062,
  1,
  2,
  217,
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
    [150, 0, 0],
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
);
