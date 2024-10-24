const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Rose Stakes',
  '玫瑰锦标',
  RaceInfo.class_enum.G2,
  RaceInfo.track_enum.hanshin,
  RaceInfo.ground_enum.grass,
  1800,
  RaceInfo.distance_enum.mile,
  RaceInfo.rotation_enum.right,
  18,
  [9, 12, 22, 86, 111, 116],
  RaceInfo.limit_enum.exact3,
  35,
  0,
  725,
  10904,
);
