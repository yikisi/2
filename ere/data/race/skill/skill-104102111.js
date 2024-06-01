const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  104102111,
  '猪突猛进！爆进之路！',
  '临近比赛终盘时处于前方，则速度大幅上升＜短距离＞',
  10410211,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate <= 50,
    () => false,
  ],
  [2.4, 0],
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
    [0.45, 0, 0],
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
