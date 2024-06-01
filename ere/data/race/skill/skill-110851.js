const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110851,
  '苍炎',
  '比赛进行一半左右若位于中间位置，则速度少量提升，如果是英里比赛，则进一步增加效果和持续时间',
  11085,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 45 &&
      args.order_rate <= 90 &&
      args.order_rate >= 40 &&
      args.distance_type === 2,
    (args) =>
      args.distance_rate <= 50 &&
      args.distance_rate >= 45 &&
      args.order_rate <= 90 &&
      args.order_rate >= 40,
  ],
  [6, 5],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
