const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200982,
  '大きなリード',
  'レース中盤に大きく差をつけ先頭だと\n速度がわずかに上がる＜短距離＞',
  20098,
  1,
  262,
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
  [1, 0],
  [20, 0],
  1,
);
