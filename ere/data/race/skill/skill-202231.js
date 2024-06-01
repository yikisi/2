const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202231,
  '夜晚◎',
  '擅长夜晚的比赛',
  20223,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.time === 4, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [5, 0, 0],
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
  [5, 0],
  [45, 0],
  0,
  false,
);
