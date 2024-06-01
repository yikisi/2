const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210281,
  '大地的睿智',
  '在比赛终盘中段时，速度提升习得的技能越多则效果越强',
  21028,
  2,
  10,
  633,
  [() => true, () => true],
  [(args) => args.phase_laterhalf_random === 2, () => false],
  [2.4, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [2, 1, 1],
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
