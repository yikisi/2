const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110161,
  '灰色的临界点',
  '比赛终盘的最终弯道后半处位于前列时速度提升，若是长距离比赛且中盘进行过位置竞争，速度迅猛提升',
  11016,
  5,
  18,
  340,
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 40,
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner_laterhalf === 1 &&
      args.order_rate <= 40,
  ],
  [5, 5],
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
    [0.55, 0, 0],
    [0.35, 0, 0],
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
