const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Japan Cup',
  '日本杯',
  RaceInfo.class_enum.G1,
  RaceInfo.track_enum.tokyo,
  RaceInfo.ground_enum.grass,
  2400,
  RaceInfo.distance_enum.medium,
  RaceInfo.rotation_enum.left,
  18,
  [1, 3, 8, 14, 15, 17, 47, 68, 89, 94, 104, 107, 114, 116],
  RaceInfo.limit_enum.post3,
  44,
  10000,
  10606,
);
