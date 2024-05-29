const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200132,
  '根幹距離○',
  '根幹距離（400mの倍数）が\n少し得意になる',
  20013,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.is_basis_distance === 1, () => true],
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
);
