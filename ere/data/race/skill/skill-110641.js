const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110641,
  '铃儿响叮当',
  '在比赛中段以后的直线位于领头时长时间内速度持续少量提升，如果在中山竞马场发动了「爆领」技能，长时间内持续微量额外提升加速度',
  11064,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.order === 1 &&
      args.track_id === 10005 &&
      args.is_used_skill_id === 202051,
    (args) => args.distance_rate >= 40 && args.corner === 0 && args.order === 1,
  ],
  [7, 7],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.1, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  false,
);
