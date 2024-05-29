const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201481,
  '下校後のスペシャリスト',
  '下り坂で疲れにくくなる\n＜作戦・追込＞',
  20148,
  2,
  9,
  508,
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
);
