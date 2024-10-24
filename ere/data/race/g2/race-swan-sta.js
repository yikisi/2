const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Swan Stakes',
  '天鹅锦标',
  RaceInfo.class_enum.G2,
  RaceInfo.track_enum.hanshin,
  RaceInfo.ground_enum.grass,
  1400,
  RaceInfo.distance_enum.short,
  RaceInfo.rotation_enum.right,
  18,
  [10, 28, 41, 53, 93],
  RaceInfo.limit_enum.post3,
  40,
  0,
  1500,
  10902,
);
