const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202252,
  '交流重赏○',
  '稍微擅长交流重赏比赛',
  20225,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.is_dirtgrade === 1, () => false],
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
