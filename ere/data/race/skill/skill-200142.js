const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200142,
  '非根干距离○',
  '稍微擅长非根干距离（400m的倍数以外）的比赛',
  20014,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.is_basis_distance === 0, () => false],
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
  [2, 0],
  [30, 0],
  0,
  false,
);
