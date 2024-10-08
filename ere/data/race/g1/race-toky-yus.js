const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Tokyo Yushun',
  '日本德比',
  RaceInfo.class_enum.G1,
  RaceInfo.track_enum.tokyo,
  RaceInfo.ground_enum.grass,
  2400,
  RaceInfo.distance_enum.medium,
  RaceInfo.rotation_enum.left,
  18,
  [1, 3, 8, 16, 17, 26, 31, 33, 35, 37, 57, 69, 70, 84, 94, 105, 108, 115],
  RaceInfo.limit_enum.exact3,
  20,
  7500,
  10606,
);
