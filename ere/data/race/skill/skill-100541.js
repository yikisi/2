const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100541,
  '疾风爆走天马冲刺！',
  '比赛后半段若从后方进行了超越，剩余150m后自身位于前方时，在短时间内速度大幅提升',
  10054,
  4,
  18,
  340,
  [
    (args) =>
      args.order_rate >= 45 &&
      args.distance_rate >= 50 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.remain_distance <= 150 && args.order_rate <= 50, () => false],
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
    [0.45, 0, 0],
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
