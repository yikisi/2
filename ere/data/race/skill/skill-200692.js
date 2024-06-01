const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200692,
  '窥视展开',
  '临近比赛中盘并位于后方时，略微不容易疲劳并使前方马娘速度稍微下降＜英里＞',
  20069,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate > 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [9, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, -0.05, 0],
    [0, 0, 0],
  ],
  [
    [1, 9, 0],
    [0, 0, 0],
  ],
  [
    [0, 18, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [20, 0],
  1,
  false,
);
