const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200612,
  '外差し準備',
  '最終コーナーで外から追い抜くと\n速度がわずかに上がる＜作戦・差し＞',
  20061,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    () => true,
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
    [1500, 0, 0],
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
  [20, 0],
  1,
);
