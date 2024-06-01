const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110091,
  "Queen's Lumination",
  '在比赛后半段的直线位于前方时速度少量持续上升，位于领头位置并与后方马娘距离较近时，技能效果提升',
  11009,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.corner === 0 &&
      args.order === 1 &&
      args.bashin_diff_behind <= 1,
    (args) => args.distance_rate >= 50 && args.corner === 0 && args.order <= 2,
  ],
  [6, 6],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
