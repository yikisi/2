const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202462,
  '坚韧不拔',
  '最终直线在领头位置且后方1马身内有马娘时，速度少量提升＜作战・领放＞',
  20246,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.is_last_straight === 1 &&
      args.order === 1 &&
      args.bashin_diff_behind <= 1,
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
