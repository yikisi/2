const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200311,
  'GⅠ苦手',
  '稍微不擅长GⅠ等大舞台的比赛',
  20031,
  1,
  4,
  -129,
  [() => true, () => true],
  [(args) => args.grade === 100, () => false],
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
  [1, 0],
  [-30, 0],
  0,
  false,
);
