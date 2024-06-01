const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10111,
  '精神一到',
  '在最终直线上从后方赶超时，会使用末脚少量加快速度',
  1011,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.change_order_onetime < 0 &&
      args.order >= 3,
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
    [0.25, 0, 0],
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
  [30, 0],
  0,
  false,
);
