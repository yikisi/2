const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201192,
  'リードキープ',
  'レース中盤に差をつけ先頭だと\n速度がわずかに上がる＜長距離＞',
  20119,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase_random === 1 &&
      args.bashin_diff_behind >= 1 &&
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
