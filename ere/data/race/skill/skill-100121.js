const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100121,
  '单挑！白热化！',
  '最终弯道之后从后方绕到外道赶超时，在最终直线上加快速度',
  10012,
  5,
  18,
  340,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate >= 40,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
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
