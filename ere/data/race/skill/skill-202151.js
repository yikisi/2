const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202151,
  '勇往直前',
  '在比赛中盘小幅消耗耐力，大幅提升速度＜作战・居中＞',
  20215,
  2,
  10,
  508,
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
    [0.45, -0.02, 0],
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
  [60, 0],
  1,
  false,
);
