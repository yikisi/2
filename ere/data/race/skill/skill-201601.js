const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201601,
  '地固め',
  'レース序盤にスキルを多く発動すると\n加速力がわずかに上がる',
  20160,
  1,
  217,
  [() => true, () => true],
  [(args) => args.activate_count_start >= 3, () => true],
  [3, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
