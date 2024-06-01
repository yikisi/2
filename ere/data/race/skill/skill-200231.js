const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200231,
  '雨天◎',
  '擅长雨天的比赛',
  20023,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.weather === 3, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [4, 0, 0],
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
  [4, 0],
  [45, 0],
  0,
  false,
);
