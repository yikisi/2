const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100891,
  '青冥誓约',
  '在比赛中段左右若位于前方则速度提升，并回复少量体力，如果比赛距离在2400ｍ及以上，回复量增加',
  10089,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50 &&
      args.course_distance >= 2400,
    (args) =>
      args.distance_rate >= 45 &&
      args.distance_rate <= 55 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 9, 0],
    [27, 9, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.035, 0],
    [0.35, 0.015, 0],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
  false,
);
