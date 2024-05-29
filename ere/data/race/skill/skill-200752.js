const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200752,
  '内弁慶',
  '最終コーナーで内ラチ側にいると\n速度がわずかに上がる＜長距離＞',
  20075,
  1,
  217,
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
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 0, 0],
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
  [20, 0],
  1,
);
