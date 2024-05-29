const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200331,
  '弧線のプロフェッサー',
  'コーナーが得意になり\n速度が上がる',
  20033,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.all_corner_random === 1, () => true],
  [2.4, 0],
  [30, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
);
