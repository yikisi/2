const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100181,
  'ブレイズ・オブ・プライド',
  '最終コーナーで中団以降から追い抜くと\n女帝たる走りで速度が上がる',
  10018,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order >= 3 &&
      args.change_order_onetime < 0,
    () => false,
  ],
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
