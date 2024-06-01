const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200192,
  '秋马娘○',
  '稍微擅长秋季的比赛',
  20019,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.season === 3, () => false],
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
