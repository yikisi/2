const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201141,
  '神業ステップ',
  '左右に移動するとき持久力を回復する\n＜中距離＞',
  20114,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.is_move_lane === 1 &&
        args.accumulatetime >= 10) ||
      (args.distance_type === 3 &&
        args.is_move_lane === 2 &&
        args.accumulatetime >= 10),
    () => true,
  ],
  [0, 0],
  [500, 500],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
);
