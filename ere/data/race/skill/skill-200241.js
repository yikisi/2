const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200241,
  '雪の日◎',
  '雪の日のレースが得意になる',
  20024,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.weather === 4, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [4, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [60, 0, 0],
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
  [4, 0],
  [45, 0],
  0,
  false,
);
