const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201501,
  '知天命者',
  '比赛终盘位于后方时，视野更加开阔＜作战・追赶＞',
  20150,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
    () => false,
  ],
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
