const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201621,
  'ふり絞り',
  'レース終盤にスキルを多く発動すると\n持久力がわずかに回復する',
  20162,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.activate_count_end_after >= 3, () => true],
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
    [0.015, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
);
