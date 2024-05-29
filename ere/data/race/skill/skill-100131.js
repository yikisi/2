const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100131,
  '貴顕の使命を果たすべく',
  '最終コーナーで前の方にいると\n抜かせない覚悟を決めて速度が上がる\n長距離で余力十分ならすごく上がる',
  10013,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.distance_diff_rate <= 30 &&
      args.distance_type === 4 &&
      args.lastspurt === 2,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.distance_diff_rate <= 30,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [4500, 0, 0],
    [3500, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
