const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101051,
  '终达群星',
  '在比赛中段左右处在中间集团，速度提升，若是中距离比赛，且至此为止发动过7次技能，则速度会大幅提高',
  10105,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type === 3 &&
      args.activate_count_all >= 7,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
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
