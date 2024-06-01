const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110181,
  '和暖微风，瞬间亦永恒',
  '赛程中盘于前方开始进行发力时提升速度',
  11018,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.order >= 3 &&
      args.order_rate <= 50 &&
      args.is_overtake === 1,
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
