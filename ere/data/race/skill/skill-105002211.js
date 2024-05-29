const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105002211,
  '起死回生の出力',
  'レース終盤始めの方に中団以降にいると\nしばらくの間加速力が上がる＜中距離＞',
  10500221,
  6,
  3,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate >= 40,
    () => true,
  ],
  [4, 0],
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
    [4000, 0, 0],
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
