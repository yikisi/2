const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201453,
  '月影一闪',
  '在直线上提高速度＜作战・追赶＞',
  20145,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) => args.running_style === 4 && args.straight_random === 1,
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
