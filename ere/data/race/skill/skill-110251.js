const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110251,
  '诚心诚意，以喵待人',
  '比赛前半段若一直位于队伍中后方，则在比赛终盘的最终弯道以及往后向前小幅突进，如果是长距离比赛则增加效果量',
  11025,
  5,
  18,
  340,
  [
    (args) => args.distance_rate >= 50 && args.order_rate_out40_continue === 1,
    (args) => args.distance_rate >= 50 && args.order_rate_out40_continue === 1,
  ],
  [
    (args) =>
      args.distance_type === 4 && args.phase >= 2 && args.is_finalcorner === 1,
    (args) => args.phase >= 2 && args.is_finalcorner === 1,
  ],
  [5, 5],
  [500, 500],
  [
    [22, 0, 0],
    [22, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
