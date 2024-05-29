const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110521,
  '113転び114起き',
  '最終コーナーで先頭から離されていると\nその距離が遠いほど頑張り続けて\n速度を少しずつ上げる',
  11052,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.distance_diff_top >= 7,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 0, 0],
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
  0,
);
