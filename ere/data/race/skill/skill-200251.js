const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200251,
  '内枠得意◎',
  '枠番が1～3のレースが得意になる',
  20025,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.post_number <= 3, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [5, 0, 0],
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
  [5, 0],
  [45, 0],
  0,
  false,
);
