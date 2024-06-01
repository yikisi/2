const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100591,
  '超越彼方……',
  '保持冷静进入中盘并准备发力时或是在终盘胜负关键的弯道位于中部梯队时，会振作精神提升加速力',
  10059,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      (args.phase >= 2 &&
        args.corner !== 0 &&
        args.is_finalcorner === 0 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70) ||
      (args.phase === 1 &&
        args.corner !== 0 &&
        args.is_finalcorner === 1 &&
        args.temptation_count === 0 &&
        args.order_rate >= 50 &&
        args.order_rate <= 70),
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
