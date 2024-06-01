const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  103502211,
  '一飞冲天！',
  '在终盘的最终直线若处于好位置，一段时间内速度提升＜中距离＞',
  10350221,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.is_last_straight === 1 &&
      args.phase >= 2 &&
      args.order_rate >= 20 &&
      args.order_rate <= 60,
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
