const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100701,
  'セイリオス',
  '残り800m地点で中団にいると加速力が\nわずかに上がる、2400ｍのレースで\n人気が高いとすごく上がる',
  10070,
  5,
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
    [5000, 0, 0],
    [2000, 0, 0],
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
);
