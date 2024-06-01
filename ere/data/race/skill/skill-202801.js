const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202801,
  '先发制人',
  '临近比赛中盘时，速度提升',
  20280,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.phase_laterhalf_random === 0, () => false],
  [1.8, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
