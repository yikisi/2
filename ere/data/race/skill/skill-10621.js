const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10621,
  '预备、咚！',
  '比赛中期左右处于队伍中团时重新振作，稍微回复持久力并且略微提高速度',
  1062,
  3,
  17,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.phase === 1 &&
      args.order >= 3 &&
      args.order_rate <= 70,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.035, 0.15, 0],
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
  [1, 2],
  [15, 15],
  0,
  false,
);
