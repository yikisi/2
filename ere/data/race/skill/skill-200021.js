const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200021,
  '逆时针◎',
  '擅长逆时针赛道',
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
