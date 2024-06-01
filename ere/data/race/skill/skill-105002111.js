const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105002111,
  '让你见识一下！',
  '比赛中盘位于后方时，一段时间内速度提升，并选择更好的路线＜作战・追赶＞',
  10500211,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.phase_random === 1 &&
      args.running_style === 4 &&
      args.order_rate >= 50,
    () => false,
  ],
  [4, 0],
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
    [0.35, 0.035, 0],
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
  [30, 30],
  1,
  false,
);
