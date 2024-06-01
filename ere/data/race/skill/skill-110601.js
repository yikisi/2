const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110601,
  'Go☆Go☆for it!',
  '最终弯道之后超过对手并在最终直线处于中间集团时加快速度若人气处于后列则能振奋起来持续提高速度',
  11060,
  5,
  18,
  340,
  [
    (args) => args.is_finalcorner === 1 && args.change_order_onetime < 0,
    (args) => args.is_finalcorner === 1 && args.change_order_onetime < 0,
  ],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.popularity >= 4,
    (args) =>
      args.is_last_straight === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 70 &&
      args.popularity < 4,
  ],
  [6, 5],
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
    [0.35, 0, 0],
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
