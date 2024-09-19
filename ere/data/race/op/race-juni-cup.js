const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Junior Cup',
  '少年杯',
  RaceInfo.class_enum.OP,
  RaceInfo.track_enum.nakayama,
  RaceInfo.ground_enum.grass,
  2000,
  RaceInfo.distance_enum.mile,
  RaceInfo.rotation_enum.right,
  16,
  [],
  RaceInfo.limit_enum.exact3,
  1,
  500,
  10504,
);
