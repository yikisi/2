const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200133,
  '根干距离×',
  '稍微不擅长根干距离（400m的倍数）的比赛',
  20013,
  1,
  4,
  -129,
  [() => true, () => true],
  [(args) => args.is_basis_distance === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [2, 0, 0],
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
  [2, 0],
  [-30, 0],
  0,
  false,
);
