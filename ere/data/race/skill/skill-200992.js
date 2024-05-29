const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200992,
  '善後策',
  'レース終盤が迫ったとき前の方にいると\n加速力がわずかに上がる＜短距離＞',
  20099,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_laterhalf_random === 1 &&
      args.order >= 2 &&
      args.order_rate <= 50,
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
