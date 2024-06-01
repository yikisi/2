const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200201,
  '冬马娘◎',
  '擅长冬季的比赛',
  20020,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.season === 4, () => false],
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
