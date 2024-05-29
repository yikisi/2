const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200941,
  '追込ためらい',
  'レース終盤に作戦・追込のウマ娘を\nためらわせて速度をわずかに下げる',
  20094,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_oikomi_otherself >= 1 && args.phase_random === 2,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-1500, 0, 0],
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
  [1, 5],
  [10, 10],
  1,
);
