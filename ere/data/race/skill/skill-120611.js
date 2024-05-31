const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  120611,
  '理想へのwinding road',
  '残り600mを切って中団で外から\n追い抜いていると、ラストスパートの\n最中に速度を上げ続ける',
  12061,
  5,
  18,
  340,
  [
    (args) =>
      args.remain_distance <= 600 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.is_lastspurt === 1 && args.phase === 3, () => false],
  [6, 0],
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
