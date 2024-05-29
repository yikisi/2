const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201012,
  '後方釘付',
  'レース序盤に前の方にいると\n後方のウマ娘が少し萎縮する＜短距離＞',
  20101,
  1,
  1,
  262,
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
  [500, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-2000, 0, 0],
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
  [15, 15],
  1,
);
