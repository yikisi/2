const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201311,
  '先行直线◎',
  '在直线的速度少量上升＜作战・先行＞',
  20131,
  1,
  2,
  262,
  [() => true, () => true],
  [
    (args) => args.running_style === 2 && args.straight_random === 1,
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
