const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202451,
  '最高档',
  '最终直线位于第二名往后，并距离领头4马身以内时，速度极大提升＜作战・居中＞',
  20245,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.is_last_straight === 1 &&
      args.order >= 2 &&
      args.distance_diff_top <= 10,
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
