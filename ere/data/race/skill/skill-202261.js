const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202261,
  '勝利の機運',
  'レース終盤が迫ったとき前方にいると\n速度が上がる＜ダート＞',
  20226,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_laterhalf_random === 1 &&
      args.order_rate <= 50,
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
  1,
);
