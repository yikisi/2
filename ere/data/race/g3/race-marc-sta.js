const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'March Stakes',
  '三月锦标',
  RaceInfo.class_enum.G3,
  RaceInfo.track_enum.nakayama,
  RaceInfo.ground_enum.mud,
  1800,
  RaceInfo.distance_enum.mile,
  RaceInfo.rotation_enum.right,
  16,
  4,
  RaceInfo.limit_enum.post4,
  12,
  950,
  10509,
);
