const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202661,
  '昂る鼓動',
  'レース終盤始めの方に中団にいると\n前に出る＜中距離/長距離＞',
  20266,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 30 &&
        args.order_rate <= 80) ||
      (args.distance_type === 4 &&
        args.phase_firsthalf_random === 2 &&
        args.order_rate >= 30 &&
        args.order_rate <= 80),
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
