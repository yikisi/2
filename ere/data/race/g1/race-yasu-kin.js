const RaceInfo = require('#/data/race/model/race-info');

module.exports = new RaceInfo(
  'Yasuda Kinen',
  '安田纪念',
  RaceInfo.class_enum.G1,
  RaceInfo.track_enum.tokyo,
  RaceInfo.ground_enum.grass,
  1600,
  RaceInfo.distance_enum.mile,
  RaceInfo.rotation_enum.left,
  18,
  [6, 8, 10, 19, 53, 78, 82, 85],
  RaceInfo.limit_enum.post3,
  21,
  4500,
  10602,
);
