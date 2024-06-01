const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100221,
  'Fairy tale',
  '在赛程后半若处于好位置并进行名次争夺会因奔跑而身心雀跃速度获得提升',
  10022,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order >= 2 &&
      args.order_rate <= 40 &&
      args.blocked_side_continuetime >= 2,
    () => false,
  ],
  [5, 0],
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
    [0.35, 0, 0],
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
  0,
  false,
);
