const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110051,
  'Ravissant',
  '最終コーナー以降に先団で追い抜くと\n煌めくような華麗な動きを披露し\n少しの間速度がすごく上がる',
  11005,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.change_order_onetime < 0 &&
      args.order_rate <= 40,
    () => true,
  ],
  [4, 0],
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
    [4500, 0, 0],
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
