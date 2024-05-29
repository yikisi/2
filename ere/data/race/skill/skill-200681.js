const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200681,
  'マイルの支配者',
  'レース中盤が迫ったとき前方にいると\n速度が上がる＜マイル＞',
  20068,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate <= 50,
    () => true,
  ],
  [3, 0],
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
