const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100171,
  '汝、皇帝の神威を見よ',
  'レース終盤に3回追い抜くと\n最終直線で速度がすごく上がる',
  10017,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 && args.change_order_up_end_after >= 3,
    () => true,
  ],
  [5, 0],
  [500, 500],
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
