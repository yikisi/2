const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110241,
  'フラワリー☆マニューバ',
  '最終コーナー以降に\n前の方で抜くと速度が\n後ろの方で抜くと加速力が上がる',
  11024,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.order_rate <= 40 &&
      args.change_order_onetime < 0,
    (args) =>
      args.is_finalcorner === 1 &&
      args.order_rate >= 50 &&
      args.order_rate <= 80 &&
      args.change_order_onetime < 0,
  ],
  [5, 4],
  [500, 500],
  [
    [27, 0, 0],
    [31, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0.4, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  false,
);
