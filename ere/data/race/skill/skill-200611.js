const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200611,
  '昇り龍',
  '最終コーナーで外から追い抜くと\n速度が上がる＜作戦・差し＞',
  20061,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    () => false,
  ],
  [3, 0],
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
  1,
  false,
);
