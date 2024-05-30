const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110031,
  '絶対は、ボクだ',
  '最終コーナー以降に前の方で\n追いすがっていると最終直線を走行中\n不屈の闘志で速度がすごく上がる',
  11003,
  5,
  18,
  340,
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.is_overtake === 1 &&
      args.order <= 5 &&
      args.order_rate <= 50 &&
      args.overtake_target_no_order_up_time >= 2,
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
    [0.45, 0, 0],
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
