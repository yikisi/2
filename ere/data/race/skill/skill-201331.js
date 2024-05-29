const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201331,
  '技巧派',
  '左右に移動するとき加速力が少し上がる\n＜作戦・先行＞',
  20133,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 2 && args.is_move_lane === 1) ||
      (args.running_style === 2 && args.is_move_lane === 2),
    () => true,
  ],
  [3, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.3, 0, 0],
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
  [40, 0],
  1,
);
