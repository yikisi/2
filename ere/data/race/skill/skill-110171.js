const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110171,
  '翳り退く、さざめきの矢',
  'レース終盤に先団で詰め寄られると\n最終コーナー以降に闘志を燃やして\n速度を上げ続ける',
  11017,
  5,
  5,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.order_rate <= 50 &&
      args.overtake_target_time >= 2,
    () => true,
  ],
  [(args) => args.is_finalcorner === 1, () => true],
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
    [3500, 0, 0],
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
);
