const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200552,
  '押し切り準備',
  '最終コーナーで先頭だと\n加速力がわずかに上がる＜作戦・逃げ＞',
  20055,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.is_finalcorner_random === 1 &&
      args.order === 1,
    () => true,
  ],
  [3, 0],
  [500, 500],
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
