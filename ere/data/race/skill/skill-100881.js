const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100881,
  'Reversal Illusion',
  '最終コーナーで中団にいた場合\n残り400mを切ってから速度が上がる\n中距離レースで中盤に追い抜いていると\nすごく上がる',
  10088,
  5,
  18,
  340,
  [
    (args) =>
      args.change_order_up_middle >= 1 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 70 &&
      args.order_rate >= 40,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 70 &&
      args.order_rate >= 40,
  ],
  [
    (args) => args.distance_type === 3 && args.remain_distance <= 400,
    (args) => args.remain_distance <= 400,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.45, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
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
