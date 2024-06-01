const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100131,
  '显贵的使命仍需完成',
  '在最终弯道处于前方时，绝对不能被超越的觉悟使得速度提升；若是在长距离比赛中仍体力充沛，变为大幅提升',
  10013,
  5,
  18,
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
    [0.45, 0, 0],
    [0.35, 0, 0],
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
  false,
);
