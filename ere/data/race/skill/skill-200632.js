const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200632,
  '仕掛け抜群',
  'レース終盤に後方にいると\nラストスパートの最中に\n速度をわずかに上げる＜作戦・追込＞',
  20063,
  1,
  2,
  217,
  [(args) => args.phase === 2 && args.distance_diff_rate >= 50, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_firsthalf_random === 3 &&
      args.is_lastspurt === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
