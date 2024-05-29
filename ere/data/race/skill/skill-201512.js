const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201512,
  'まなざし',
  'レース終盤に目を付けたウマ娘の\n緊張感がわずかに増す＜作戦・追込＞',
  20151,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 && args.phase_random === 2 && args.order >= 2,
    () => true,
  ],
  [3, 0],
  [500, 0],
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
    [4, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
);
