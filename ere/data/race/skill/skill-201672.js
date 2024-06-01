const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201672,
  '安利',
  '在比赛中盘进行名次争夺时速度略微上升＜沙土＞',
  20167,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase === 1 &&
      args.blocked_side_continuetime >= 2,
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
