const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120321,
  '超光速微粒子之可能性',
  '在终盘的最终弯道以及往后位于前方时短时间内速度大幅提升，如果是中距离比赛则改变效果，短时间内向前大幅突进',
  12032,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order_rate <= 50 &&
      args.distance_type === 3,
    (args) =>
      args.phase >= 2 && args.is_finalcorner === 1 && args.order_rate <= 50,
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
