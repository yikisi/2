const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201291,
  '再次燃烧',
  '在比赛终盘小幅消耗持久力，提升加速度＜作战・领放＞',
  20129,
  2,
  10,
  508,
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
    [0.4, -0.02, 0],
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
