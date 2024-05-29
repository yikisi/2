const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201702,
  'ありったけ',
  '終盤の最終直線で好位置にいると\n速度がわずかに上がる＜中距離＞',
  20170,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.is_last_straight === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 60 &&
      args.phase >= 2,
    () => true,
  ],
  [3, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
);
