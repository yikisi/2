const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106803211,
  '踏破万里嘿呀！',
  '在最后冲刺阶段的直线若位于前方，则提升加速度，并之后在最终直线处稍微再向前突进＜领放・长距离＞',
  10680321,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 1 &&
      args.is_lastspurt === 1 &&
      args.corner === 0 &&
      args.order <= 3,
    (args) =>
      args.is_activate_other_skill_detail === 1 && args.is_last_straight === 1,
  ],
  [0.9, 3],
  [500, 500],
  [
    [31, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
    [0.15, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
  true,
);
