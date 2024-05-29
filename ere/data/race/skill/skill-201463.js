const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201463,
  '月影円刃',
  'コーナーで速度が上がる\n＜作戦・追込＞',
  20146,
  2,
  508,
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
    [3500, 0, 0],
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
  [60, 0],
  1,
);
