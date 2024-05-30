const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202811,
  '画竜点睛',
  'レース終盤始めの方で\n余力十分なら前に出る\n＜逃げ・長距離＞',
  20281,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 1 &&
      args.phase_firsthalf_random === 2 &&
      args.lastspurt === 2,
    () => false,
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
    [0.35, 0, 0],
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
  [60, 0],
  1,
);
