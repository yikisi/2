const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201011,
  '悩殺術',
  'レース序盤に前の方にいると\n後方のウマ娘が萎縮する＜短距離＞',
  20101,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 0 &&
      args.order_rate <= 50 &&
      args.accumulatetime >= 5,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-2500, 0, 0],
    [0, 0, 0],
  ],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [30, 30],
  1,
);
