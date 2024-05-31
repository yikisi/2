const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201361,
  'くじけぬ精神',
  'レース中盤に後ろの方にいると\n加速力が少し上がる＜作戦・先行＞',
  20136,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_random === 1 &&
      args.order_rate > 40,
    () => false,
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
    [0.3, 0, 0],
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
  [40, 0],
  1,
  false,
);
