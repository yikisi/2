const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100851,
  '至高无上',
  '冷静地进行比赛，突入终盘时位于后方附近时，稍微向前突进，并略微威慑从领头开始至多4名赛马娘',
  10085,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 66 &&
      args.distance_rate <= 68 &&
      args.order_rate >= 60 &&
      args.order_rate <= 90 &&
      args.temptation_count === 0,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [22, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [1, 7, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  false,
);
