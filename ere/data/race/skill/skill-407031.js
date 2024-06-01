const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  407031,
  '竭尽全力！',
  '在最终冲刺的关键时刻，速度大幅提升＜英里/中距离＞',
  40703,
  6,
  26,
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
