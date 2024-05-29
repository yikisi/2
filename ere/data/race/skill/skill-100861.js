const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100861,
  '愛と熔けよただ熔けよ',
  '残り1000ｍ地点で前の方にいると\n速度が上がる',
  10086,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance >= 999 &&
      args.remain_distance <= 1001 &&
      args.order_rate >= 20 &&
      args.order_rate <= 50,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
