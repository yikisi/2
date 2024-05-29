const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202322,
  '急浮上',
  'レース終盤に中団以降にいると\n加速力がわずかに上がる＜ダート＞',
  20232,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_random === 2 &&
      args.order_rate >= 50,
    () => true,
  ],
  [3, 0],
  [500, 500],
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
