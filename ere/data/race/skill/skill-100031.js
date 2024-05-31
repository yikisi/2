const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100031,
  '究極テイオーステップ',
  'レース終盤に前と差が詰まると\n最終直線で華麗な脚取りを披露し\n速度がすごく上がる',
  10003,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 2 &&
      args.order <= 3 &&
      args.bashin_diff_infront <= 1 &&
      args.is_overtake === 1,
    () => true,
  ],
  [(args) => args.is_last_straight === 1, () => false],
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
    [0.45, 0, 0],
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
