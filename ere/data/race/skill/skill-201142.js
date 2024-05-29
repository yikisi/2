const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201142,
  '軽やかステップ',
  '左右に移動するとき\n持久力をわずかに回復する＜中距離＞',
  20114,
  1,
  217,
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
    [150, 0, 0],
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
  [20, 0],
  1,
);
