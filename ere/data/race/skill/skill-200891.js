const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200891,
  '差しけん制',
  'レース序盤に作戦・差しのウマ娘を\nけん制してわずかに疲れやすくする',
  20089,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_sashi_otherself >= 1 &&
      args.phase_random === 0 &&
      args.accumulatetime >= 5,
    () => true,
  ],
  [0, 0],
  [500, 500],
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
    [3, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
);
