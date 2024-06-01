const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202152,
  '油门全开',
  '在比赛中盘小幅消耗耐力小幅提升速度＜作战・居中＞',
  20215,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 3 && args.phase_random === 1, () => false],
  [2.4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, -0.02, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
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
