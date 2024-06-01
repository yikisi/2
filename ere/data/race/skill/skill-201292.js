const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201292,
  '第二支箭',
  '在比赛终盘小幅消耗持久力，稍微提升加速度＜作战・领放＞',
  20129,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 1 && args.phase_random === 2, () => false],
  [3, 0],
  [500, 0],
  [
    [31, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, -0.02, 0],
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
  [20, 0],
  1,
  false,
);
