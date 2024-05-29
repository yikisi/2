const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202121,
  '大胆不敵',
  'レース後半に中団にいると速度が上がり\nさらに加速力がちょっと上がる\n＜作戦・差し＞',
  20212,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.distance_rate_after_random === 50 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
    () => true,
  ],
  [2.4, 0],
  [500, 500],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 1000, 0],
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
  [60, 0],
  1,
);
