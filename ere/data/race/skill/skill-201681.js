const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201681,
  '目标是最前列！',
  '比赛终盘采取向前冲刺的姿势＜沙土＞',
  20168,
  2,
  10,
  394,
  [() => true, () => true],
  [(args) => args.ground_type === 2 && args.phase_random === 2, () => false],
  [3, 0],
  [500, 0],
  [
    [28, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.035, 0.3, 0],
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
  [3, 0],
  [60, 0],
  1,
  false,
);
