const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200131,
  '根幹距離◎',
  '根幹距離（400mの倍数）が\n得意になる',
  20013,
  1,
  0,
  174,
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
  [2, 0],
  [45, 0],
  0,
  false,
);
