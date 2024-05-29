const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202852,
  'ごぼう抜き',
  'レース終盤始めの方で\n余力十分ならわずかに前に出る\n＜追込・長距離＞',
  20285,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 4 &&
      args.phase_firsthalf_random === 2 &&
      args.lastspurt === 2,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [22, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
