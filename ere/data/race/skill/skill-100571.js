const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100571,
  '叙情、旅路の果てに',
  '終盤が迫ったどこかで後方にいると\n速度を少し上げ続ける\n中距離か長距離レースで\n先頭から離れていると効果が増える',
  10057,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50) ||
      (args.distance_type === 4 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50),
    (args) =>
      (args.distance_type === 1 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50) ||
      (args.distance_type === 2 &&
        args.phase_laterhalf_random === 1 &&
        args.order_rate > 50),
  ],
  [6, 6],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [19, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0, 0],
    [0.25, 0, 0],
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
