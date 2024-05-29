const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202002,
  '砂塵慣れ',
  'レース中盤に後方にいると\n持久力がわずかに回復する＜ダート＞',
  20200,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [150, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
);
