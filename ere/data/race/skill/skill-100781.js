const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100781,
  '春风和煦',
  '赛程前半段压低节奏，最终弯道后半段若位于前方则可长时间持续稍微提高加速度若处于第2名则效果增加',
  10078,
  5,
  18,
  340,
  [
    (args) => args.distance_rate >= 50 && args.order_rate_out20_continue === 1,
    (args) => args.distance_rate >= 50 && args.order_rate_out20_continue === 1,
  ],
  [
    (args) =>
      args.is_finalcorner_laterhalf === 1 &&
      args.distance_diff_rate <= 50 &&
      args.order === 2,
    (args) =>
      args.is_finalcorner_laterhalf === 1 && args.distance_diff_rate <= 50,
  ],
  [8, 8],
  [500, 500],
  [
    [31, 0, 0],
    [31, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, 0, 0],
    [0.1, 0, 0],
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
  0,
  false,
);
