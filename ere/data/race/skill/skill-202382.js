const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202382,
  '破局之策',
  '比赛中盘位于后方时，速度稍微提升，并选择稍好的路线＜作战・追赶＞',
  20238,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.phase_random === 1 &&
      args.running_style === 4 &&
      args.order_rate >= 50,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.015, 0],
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
  [1, 3],
  [10, 10],
  1,
  false,
);
