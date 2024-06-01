const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201463,
  '月影圆刃',
  '在弯道的速度上升＜作战・追赶＞',
  20146,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.running_style === 4 && args.all_corner_random === 1,
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
    [0.35, 0, 0],
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
  [60, 0],
  1,
  false,
);
