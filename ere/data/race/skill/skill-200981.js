const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200981,
  '圧倒的リード',
  'レース中盤に大きく差をつけ先頭だと\n速度が上がる＜短距離＞',
  20098,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase === 1 &&
      args.bashin_diff_behind >= 3 &&
      args.order === 1,
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
  [1, 0],
  [60, 0],
  1,
);
