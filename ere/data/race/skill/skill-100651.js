const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100651,
  'アゲてアゲてぷちょへんざ！',
  '終盤が迫ったどこかで前方にいると\n速度を少しアゲる、短距離かマイル\nレースの場合は少しアゲ続ける',
  10065,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50) ||
      (args.distance_type === 2 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50),
    (args) =>
      (args.distance_type === 3 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50) ||
      (args.distance_type === 4 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate <= 50),
  ],
  [6, 5],
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
    [2500, 0, 0],
    [2500, 0, 0],
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
);
