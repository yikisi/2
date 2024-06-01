const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105002211,
  '起死回生的出力',
  '比赛终盘时开始时若身处中团以后的位置，则一段时间内加速度持续提升＜中距离＞',
  10500221,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate >= 40,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
