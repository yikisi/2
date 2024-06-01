const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100011,
  '流星',
  '在比赛终盘处于前方并超越对手时，会趁势向前突进，并且微幅提升加速度',
  10001,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.order >= 1 &&
      args.order_rate <= 50 &&
      args.change_order_onetime < 0,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [22, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
