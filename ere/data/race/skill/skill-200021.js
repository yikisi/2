const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200021,
  '左回り◎',
  '左回りコースが得意になる',
  20002,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.rotation === 2, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 0, 0],
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
  [1, 0],
  [45, 0],
  0,
  false,
);
