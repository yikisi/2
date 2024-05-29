const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110601,
  'Go☆Go☆for it!',
  '最終コーナー以降に追い抜いていた場合\n最終直線で中団にいると速度が上がる\n人気が低い場合は奮起して上げ続ける',
  11060,
  5,
  5,
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
    [3500, 0, 0],
    [3500, 0, 0],
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
);
