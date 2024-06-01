const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200202,
  '冬马娘○',
  '稍微擅长冬季的比赛',
  20020,
  1,
  0,
  129,
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
    [40, 0, 0],
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
  [30, 0],
  0,
  false,
);
