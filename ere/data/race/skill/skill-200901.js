const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200901,
  '差し焦り',
  'レース中盤に作戦・差しのウマ娘を\n焦らせてわずかに疲れやすくする',
  20090,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style_count_sashi_otherself >= 1 && args.phase_random === 1,
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
    [3, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
);
