const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120671,
  'ポンテ・デ・ディアマン',
  '終盤が迫ったときどこかで中団にいると\n速度が少し上がる、中距離レースなら\n効果が増える',
  12067,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase_laterhalf_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type === 3,
    (args) =>
      args.phase_laterhalf_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.distance_type !== 3,
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
    [0.35, 0, 0],
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
  false,
);
