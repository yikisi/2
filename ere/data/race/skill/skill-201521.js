const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201521,
  '领放诀窍◎',
  '更容易占据有利位置＜作战・领放＞',
  20152,
  1,
  0,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [5, 8, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [60, 10, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 5],
  [15, 30],
  0,
  false,
);
