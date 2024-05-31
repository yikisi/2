const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200551,
  '逃亡者',
  '最終コーナーで先頭だと\n加速力が上がる＜作戦・逃げ＞',
  20055,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.is_finalcorner_random === 1 &&
      args.order === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [60, 0],
  1,
  false,
);
