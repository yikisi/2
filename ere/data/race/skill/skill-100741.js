const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100741,
  '优雅清风待花开',
  '赛程后半段，在中团位置根据剩余持久力进行相应的长距离冲刺，速度逐渐小幅度提升',
  10074,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
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
    [0.15, 0, 0],
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
