const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202741,
  '十全十美',
  '最終コーナー前の第3コーナーで\n前の方にいると前に出る\n＜マイル/中距離＞',
  20274,
  2,
  4,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 &&
        args.corner_random === 3 &&
        args.order_rate <= 50) ||
      (args.distance_type === 3 &&
        args.corner_random === 3 &&
        args.order_rate <= 50),
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [22, 0, 0],
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
  [3, 0],
  [60, 0],
  1,
);
