const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200751,
  '内的体験',
  '最終コーナーで内ラチ側にいると\n速度が上がる＜長距離＞',
  20075,
  2,
  3,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.lane_type === 0,
    () => true,
  ],
  [3, 0],
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
    [3500, 0, 0],
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
