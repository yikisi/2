const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110201,
  'Do Ya Breakin!',
  '終盤の直線で前の方にいると意気揚々と\n速度を上げる、そこが向正面の場合\nさらに加速力をわずかに上げる',
  11020,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.corner === 0 &&
      args.order <= 2 &&
      args.straight_front_type === 2,
    (args) => args.phase >= 2 && args.corner === 0 && args.order <= 2,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 2000, 0],
    [3500, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
