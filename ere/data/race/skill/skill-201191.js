const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201191,
  '先陣の心得',
  'レース中盤に差をつけ先頭だと\n速度が上がる＜長距離＞',
  20119,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase_random === 1 &&
      args.bashin_diff_behind >= 1 &&
      args.order === 1,
    () => false,
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
