const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201471,
  '視界良好！異常なし！',
  '左右に移動すると状況を把握して\n視野が少し広くなる＜作戦・追込＞',
  20147,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 4 && args.is_move_lane === 1) ||
      (args.running_style === 4 && args.is_move_lane === 2),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [10, 0, 0],
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
