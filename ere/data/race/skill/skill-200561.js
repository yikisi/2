const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200561,
  '绰绰有余',
  '临近比赛中盘时不容易疲惫＜作战・先行＞',
  20056,
  2,
  9,
  508,
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
    [0.055, 0, 0],
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
