const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110151,
  '惠福船歌',
  '距终点400米的位置身处前方时速度提升。若是比赛中合计使用过7次技能，变为大幅提升',
  11015,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40 &&
      args.activate_count_all >= 7,
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.order_rate <= 40 &&
      args.activate_count_all <= 6,
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
    [0.45, 0, 0],
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
