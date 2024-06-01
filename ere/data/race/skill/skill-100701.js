const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100701,
  '天骄',
  '在剩余800m处位于队伍中间时，稍微提升加速度，若在2400m的比赛中取得高人气则大幅提升加速度',
  10070,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.order_rate >= 30 &&
      args.order_rate <= 60 &&
      args.course_distance === 2400 &&
      args.popularity <= 3,
    (args) =>
      args.remain_distance >= 799 &&
      args.remain_distance <= 801 &&
      args.order_rate >= 30 &&
      args.order_rate <= 60,
  ],
  [4, 4],
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
    [0.5, 0, 0],
    [0.2, 0, 0],
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
