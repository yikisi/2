const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100761,
  '花开世界',
  '如果在比赛半程处于中间梯队，速度会少量提升若是长距离比赛，速度提升的持续时间将延长，并恢复大量体力',
  10076,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 51 &&
      args.order_rate >= 30 &&
      args.order_rate <= 80,
  ],
  [6, 5],
  [500, 500],
  [
    [27, 9, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.075, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  0,
  false,
);
