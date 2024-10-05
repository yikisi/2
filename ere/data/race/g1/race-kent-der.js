const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Kentucky Derby',
  '肯塔基德比',
  RaceInfo.class_enum.G1,
  RaceInfo.track_enum.kentucky,
  RaceInfo.ground_enum.mud,
  2000,
  RaceInfo.distance_enum.medium,
  RaceInfo.rotation_enum.right,
  20,
  [],
  RaceInfo.limit_enum.exact3,
  17,
  11900,
  55500,
);
