const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201462,
  '追込コーナー○',
  'コーナーで速度がわずかに上がる\n＜作戦・追込＞',
  20146,
  1,
  217,
  [() => true, () => true],
  [
    (args) => args.running_style === 4 && args.all_corner_random === 1,
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
