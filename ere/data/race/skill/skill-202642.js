const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202642,
  '一歩から',
  'レース中盤に中団にいると\nしばらくの間速度がちょっと上がる\n＜作戦・差し＞',
  20264,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 90,
    () => false,
  ],
  [4, 0],
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
    [0.05, 0, 0],
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
  [20, 0],
  1,
);
