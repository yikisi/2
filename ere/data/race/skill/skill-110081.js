const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110081,
  'Into High Gear!',
  '比赛进入中盘之后在下坡时位于中间集团，则下完坡后在短时间内速度提升，如果位于东京竞马场则再次推高档位',
  11008,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80 &&
      args.track_id === 10006,
    (args) =>
      args.phase >= 1 &&
      args.slope === 2 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80,
  ],
  [
    (args) => args.slope === 0 || args.slope === 1,
    (args) => args.slope === 0 || args.slope === 1,
  ],
  [5, 4],
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
    [0.35, 0.1, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 1, 0],
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
