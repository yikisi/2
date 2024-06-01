const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201531,
  '先行诀窍◎',
  '容易占据有利位置＜作战・先行＞',
  20153,
  1,
  0,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 2, () => false],
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
