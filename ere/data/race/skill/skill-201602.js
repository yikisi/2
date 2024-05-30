const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201602,
  '盤石の構え',
  'レース序盤にスキルを多く発動すると\n加速力が上がる',
  20160,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.activate_count_start >= 3, () => false],
  [3, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [60, 0],
  1,
);
