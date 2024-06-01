const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202021,
  '强攻策',
  '比赛中盘处于后方时一段时间内速度会少量加快＜作战・追赶＞',
  20202,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => false,
  ],
  [4, 0],
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
  [60, 0],
  1,
  false,
);
