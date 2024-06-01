const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201462,
  '追赶弯道○',
  '在弯道的速度略微上升＜作战・追赶＞',
  20146,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
