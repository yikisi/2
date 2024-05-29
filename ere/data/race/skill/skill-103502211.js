const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  103502211,
  'きっと飛べる！',
  '終盤の最終直線で好位置にいると\nしばらくの間速度が上がる＜中距離＞',
  10350221,
  6,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.is_last_straight === 1 &&
      args.phase >= 2 &&
      args.order_rate >= 20 &&
      args.order_rate <= 60,
    () => true,
  ],
  [4, 0],
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
  [1, 0],
  [60, 0],
  1,
);
