const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200841,
  '逃げ焦り',
  'レース中盤に作戦・逃げのウマ娘を\n焦らせてわずかに疲れやすくする',
  20084,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_nige_otherself >= 1 && args.phase_random === 1,
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
    [1, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
);
