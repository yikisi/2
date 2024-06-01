const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210271,
  '大海的睿智',
  '在比赛序盘开始时，加速度提升习得的技能越多则效果越强',
  21027,
  2,
  10,
  633,
  [() => true, () => true],
  [(args) => args.phase_firsthalf_random === 0, () => false],
  [1.5, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [2, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  false,
);
