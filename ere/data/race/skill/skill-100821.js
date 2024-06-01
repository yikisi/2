const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100821,
  '闪亮跑道',
  '在最终弯道位于好位置时，短时间内速度提升，若是英里比赛，则效果时间增加',
  10082,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.order_rate >= 20,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.order_rate >= 20,
  ],
  [5, 4],
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
