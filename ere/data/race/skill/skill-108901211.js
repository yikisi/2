const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108901211,
  '全力投球',
  '在最后冲刺的关键时刻，速度大幅加快',
  10890121,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) => args.is_lastspurt === 1 && args.phase_firsthalf_random === 3,
    () => false,
  ],
  [2.4, 0],
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
    [0.45, 0, 0],
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
  false,
);
