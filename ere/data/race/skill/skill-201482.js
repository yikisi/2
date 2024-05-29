const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201482,
  '下校の楽しみ',
  '下り坂でわずかに疲れにくくなる\n＜作戦・追込＞',
  20148,
  1,
  4,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 && args.slope === 2 && args.accumulatetime >= 10,
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
