const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202132,
  '气吞牛斗',
  '比赛中盘位于前方时，略微降低后方马娘的速度，自身速度稍微提升＜中距离＞',
  20213,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 && args.phase_random === 1 && args.order <= 3,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    [27, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, -0.035, 0],
    [0, 0, 0],
  ],
  [
    [1, 10, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  1,
  false,
);
