const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  102301111,
  '正如预料，绰绰有余',
  '临近比赛中盘时若身处前方，则大幅回复持久力＜作战・先行＞',
  10230111,
  6,
  25,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate <= 50,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.075, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
  false,
);
