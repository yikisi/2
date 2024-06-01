const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100161,
  'Shadow Break',
  '在最终弯道之后在外道完成赶超时，以怪物般的力量加快速度。如果还在中盘争夺过名次，变为大幅加快速度',
  10016,
  5,
  18,
  340,
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.order >= 2 &&
      args.order_rate <= 75 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    (args) =>
      args.is_finalcorner === 1 &&
      args.order >= 2 &&
      args.order_rate <= 75 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
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
