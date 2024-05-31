const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100771,
  'Road to Glory',
  'レース終盤目前で好位置にいた場合\n残り400m地点で速度がすごく上がる\n長距離でスキル発動時、先頭か先頭から\n1バ身以内にいるとものすごく上がる',
  10077,
  5,
  18,
  340,
  [
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 40,
    (args) =>
      args.distance_rate >= 60 &&
      args.phase === 1 &&
      args.order >= 2 &&
      args.order_rate <= 40,
  ],
  [
    (args) =>
      args.remain_distance <= 401 &&
      args.remain_distance >= 399 &&
      args.distance_diff_top_float <= 25 &&
      args.distance_type === 4,
    (args) => args.remain_distance <= 401 && args.remain_distance >= 399,
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
    [0.55, 0, 0],
    [0.45, 0, 0],
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
