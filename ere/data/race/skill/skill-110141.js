const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110141,
  'コンドル猛撃波',
  '最終コーナーで中団から前を狙う時\n魂を燃え滾らせて加速力を上げる',
  11014,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.is_overtake === 1 &&
      args.order >= 4 &&
      args.order_rate <= 75,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
);
