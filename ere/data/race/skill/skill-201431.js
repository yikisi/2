const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201431,
  '大局观',
  '比赛中盘时，观察力提高，视野变得宽阔＜作战・居中＞',
  20143,
  2,
  10,
  334,
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
    [15, 0, 0],
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
