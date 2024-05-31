const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202401,
  '電光石火',
  'レース終盤に後方で追い抜こうとすると\n加速力が上がる＜短距離/マイル＞',
  20240,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 1 &&
        args.phase >= 2 &&
        args.order_rate >= 50 &&
        args.is_overtake === 1) ||
      (args.distance_type === 2 &&
        args.phase >= 2 &&
        args.order_rate >= 50 &&
        args.is_overtake === 1),
    () => false,
  ],
  [2, 0],
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
  1,
  false,
);
