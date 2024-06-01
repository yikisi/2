const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201391,
  '居中弯道◎',
  '在弯道的速度少量上升＜作战・居中＞',
  20139,
  1,
  2,
  262,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.all_corner_random === 1,
    () => false,
  ],
  [3, 0],
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
    [0.25, 0, 0],
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
  [30, 0],
  1,
  false,
);
