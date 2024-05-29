const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201332,
  '巧みなステップ',
  '左右に移動するとき\n加速力がわずかに上がる＜作戦・先行＞',
  20133,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 && args.is_move_lane === 1) ||
      (args.running_style === 2 && args.is_move_lane === 2),
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
  [20, 0],
  1,
);
