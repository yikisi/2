const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110371,
  'Guten Appetit♪',
  '最終コーナー以降に2回追い抜くと\n抱いた誇りを力に変えて\n最終直線で速度を上げ続ける',
  11037,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.change_order_up_finalcorner_after >= 2 &&
      args.is_last_straight === 1,
    () => true,
  ],
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
