const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108801211,
  '卡牌魔术：天女散花',
  '比赛终盘初段位于中后方时，提升加速度，若是2200m～2400m的比赛，则消耗少量体力在终盘初段更早时间内大幅提升加速度＜中距离＞',
  10880121,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.course_distance >= 2200 &&
      args.course_distance <= 2400 &&
      args.phase_firstquarter_random === 2 &&
      args.order_rate >= 40,
    (args) =>
      (args.distance_type === 3 &&
        args.course_distance < 2200 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 40) ||
      (args.distance_type === 3 &&
        args.course_distance > 2400 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 40),
  ],
  [1.8, 1.8],
  [500, 500],
  [
    [31, 9, 0],
    [31, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.5, -0.02, 0],
    [0.4, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
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
