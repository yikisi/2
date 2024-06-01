const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201432,
  '阅读能力',
  '比赛中盘时，观察力提高，视野变得稍微宽阔＜作战・居中＞',
  20143,
  1,
  2,
  85,
  [() => true, () => true],
  [(args) => args.running_style === 3 && args.phase_random === 1, () => false],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [5, 0, 0],
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
  [20, 0],
  1,
  false,
);
