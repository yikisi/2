const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202882,
  '热血沸腾',
  '最终直线处在第二名开外且与领头距离4马身以内时，速度少量提升＜作战・追赶＞',
  20288,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 &&
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
