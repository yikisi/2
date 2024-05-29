const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202522,
  '型破り',
  '最終コーナー前の第3コーナーで\n後ろの方にいるとわずかに前に出る\n＜中距離/長距離＞',
  20252,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.corner_random === 3 &&
        args.order_rate >= 50) ||
      (args.distance_type === 4 &&
        args.corner_random === 3 &&
        args.order_rate >= 50),
    () => true,
  ],
  [3, 0],
  [500, 500],
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
