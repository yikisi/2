const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200861,
  '先行けん制',
  'レース序盤に作戦・先行のウマ娘を\nけん制してわずかに疲れやすくする',
  20086,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_senko_otherself >= 1 &&
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
    [-100, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [
    [2, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
);
