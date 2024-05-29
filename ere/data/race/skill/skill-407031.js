const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  407031,
  'ベストを尽くして！',
  'ラストスパートの最中に\n速度がすごく上がる＜マイル/中距離＞',
  40703,
  6,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 &&
        args.is_lastspurt === 1 &&
        args.phase_firsthalf_random === 3) ||
      (args.distance_type === 3 &&
        args.is_lastspurt === 1 &&
        args.phase_firsthalf_random === 3),
    () => true,
  ],
  [2.4, 0],
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
    [4500, 0, 0],
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
  [60, 0],
  1,
);
