const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100421,
  "『I'm possible』",
  '残り200ｍ地点で先頭ではないとき\n先頭から4バ身以内だと速度が上がる\n2バ身以内にいる場合はすごく上がる',
  10042,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.distance_diff_top <= 5 &&
      args.order >= 2,
    (args) =>
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.distance_diff_top <= 10 &&
      args.order >= 2,
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
