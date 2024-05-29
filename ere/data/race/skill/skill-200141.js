const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200141,
  '非根幹距離◎',
  '非根幹距離（400mの倍数以外）が\n得意になる',
  20014,
  1,
  174,
  [() => true, () => true],
  [(args) => args.is_basis_distance === 0, () => true],
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
    [600000, 0, 0],
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
  [45, 0],
  0,
);
