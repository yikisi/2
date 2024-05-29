const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200342,
  'コーナー加速○',
  '華麗なコーナーワークで\n加速力がわずかに上がる',
  20034,
  1,
  217,
  [() => true, () => true],
  [(args) => args.all_corner_random === 1, () => true],
  [3, 0],
  [30, 30],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
