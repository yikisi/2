const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Spring Stakes',
  '春季锦标',
  RaceInfo.class_enum.G2,
  RaceInfo.track_enum.nakayama,
  RaceInfo.ground_enum.grass,
  1800,
  RaceInfo.distance_enum.mile,
  RaceInfo.rotation_enum.right,
  16,
  [16, 26, 68, 84, 105, 115, 124],
  RaceInfo.limit_enum.exact3,
  11,
  0,
  1687,
  10503,
);
