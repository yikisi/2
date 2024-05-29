const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202641,
  '千里の道',
  'レース中盤に中団にいると\nしばらくの間速度が少し上がる\n＜作戦・差し＞',
  20264,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 90,
    () => true,
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
    [0.25, 0, 0],
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
  [60, 0],
  1,
);
