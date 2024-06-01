const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101081,
  '赤翼罗刹越九天',
  '比赛中段位于后方时速度提升，之后在终盘的最终弯道处准备超越时，短时间内稍微向前突进',
  10108,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 50,
    (args) =>
      args.phase >= 2 &&
      args.is_activate_other_skill_detail === 1 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_overtake === 1,
  ],
  [5, 3],
  [500, 500],
  [
    [27, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  0,
  true,
);
