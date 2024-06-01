const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202452,
  '暴走',
  '最终直线位于第二名往后，并距离领头4马身以内时，速度少量提升＜作战・居中＞',
  20245,
  1,
  2,
  217,
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
  [30, 0],
  1,
  false,
);
