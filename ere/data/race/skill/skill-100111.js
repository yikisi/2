const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100111,
  '精神一到、何事不成',
  '在最终直线上从后方赶超时，会使用末脚少量加快速度',
  10011,
  4,
  18,
  340,
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
