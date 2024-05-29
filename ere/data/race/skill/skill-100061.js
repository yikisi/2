const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100061,
  '勝利の鼓動',
  '残り200m地点で前の方にいると\n道を開いて速度がすごく上がる',
  10006,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order >= 2 &&
      args.order <= 5 &&
      args.order_rate <= 50 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
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
    [4500, 0, 0],
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
