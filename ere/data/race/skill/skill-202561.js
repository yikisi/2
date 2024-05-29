const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202561,
  '一発必中',
  'レース終盤が迫ったとき後方にいると\n速度が上がる＜長距離＞',
  20256,
  2,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [2.4, 0],
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
    [3500, 0, 0],
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
  1,
);
