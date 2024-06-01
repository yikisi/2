const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202232,
  '夜晚○',
  '稍微擅长夜晚的比赛',
  20223,
  1,
  0,
  129,
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
  [5, 0],
  [30, 0],
  0,
  false,
);
