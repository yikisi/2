const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200172,
  '春马娘○',
  '稍微擅长春季的比赛',
  20017,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.season === 1 || args.season === 5, () => false],
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
