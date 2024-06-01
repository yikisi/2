const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120131,
  '波光粼粼、闪耀似君',
  '比赛后半段位于前方时，根据剩余持久力展开长距离冲刺，速度持续性少量上升',
  12013,
  5,
  18,
  340,
  [() => true, () => true],
  [(args) => args.distance_rate >= 50 && args.order_rate <= 40, () => false],
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
