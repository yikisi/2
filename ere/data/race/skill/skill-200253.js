const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200253,
  '内枠苦手',
  '枠番が1～3のレースが少し苦手になる',
  20025,
  1,
  4,
  -129,
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
    [-40, 0, 0],
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
  [-30, 0],
  0,
  false,
);
