const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200342,
  'コーナー加速○',
  '華麗なコーナーワークで\n加速力がわずかに上がる',
  20034,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.all_corner_random === 1, () => false],
  [3, 0],
  [30, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
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
