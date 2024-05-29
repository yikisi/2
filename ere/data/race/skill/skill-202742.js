const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202742,
  '品行方正',
  '最終コーナー前の第3コーナーで\n前の方にいるとわずかに前に出る\n＜マイル/中距離＞',
  20274,
  1,
  4,
  217,
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
  [3, 0],
  [20, 0],
  1,
);
