const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202521,
  '天衣無縫',
  '最終コーナー前の第3コーナーで\n後ろの方にいると前に出る\n＜中距離/長距離＞',
  20252,
  2,
  10,
  508,
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
  [3, 0],
  [60, 0],
  1,
);
