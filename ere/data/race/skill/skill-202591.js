const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202591,
  '一気呵成',
  'レース終盤始めの方で\n余力十分なら前に出る\n＜差し・長距離＞',
  20259,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.lastspurt === 2,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [22, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
