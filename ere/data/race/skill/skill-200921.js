const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200921,
  '追込けん制',
  'レース序盤に作戦・追込のウマ娘を\nけん制してわずかに疲れやすくする',
  20092,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_oikomi_otherself >= 1 &&
      args.phase_random === 0 &&
      args.accumulatetime >= 5,
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
    [-0.01, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [
    [4, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
);
