const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200011,
  '顺时针◎',
  '会变得擅长顺时针赛道',
  20001,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.rotation === 1, () => false],
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
