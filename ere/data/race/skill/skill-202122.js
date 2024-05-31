const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202122,
  '恐れぬ心',
  'レース後半に中団にいると\n速度がわずかに上がりさらに加速力が\nほんのちょっと上がる＜作戦・差し＞',
  20212,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.distance_rate_after_random === 50 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
    () => false,
  ],
  [2.4, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0.05, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  1,
  false,
);
