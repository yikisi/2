const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120601,
  '天天晴晴，年年甜甜蜜蜜',
  '在终盘的最终弯道及往后，自身位于中后方时，一段时间内速度大幅提升若是中距离比赛则改变效果，一段时间内迅速向前突进',
  12060,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate >= 40 &&
      args.distance_type === 3,
    (args) =>
      args.phase >= 2 && args.is_finalcorner === 1 && args.order_rate >= 40,
  ],
  [4, 4],
  [500, 500],
  [
    [22, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.45, 0, 0],
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
